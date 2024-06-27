import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { actions as usersActions } from './users';
import { actions as emailVerificationActions } from './email-verification';
import { notification as notificationAction } from './reducers/notification';

import Dashboard from './components/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const notification = useSelector(((state) => state.notification));

  useEffect(() => {
    dispatch(usersActions.fromLocalStorage());
  }, [dispatch]);

  const logout = async () => {
    try {
      await dispatch(usersActions.logout());
    } catch ({ message }) {
      dispatch(notificationAction(message));
    }
  };

  const verify = async () => {
    try {
      await dispatch(emailVerificationActions.request(user.email));
      navigate('/email/verify/by-code');
    } catch ({ message }) {
      if (message === 'User email is verified') {
        dispatch(notificationAction('Already verified'));
        dispatch(usersActions.setEmailVerified());
      } else {
        dispatch(notificationAction(message));
      }
    }
  };

  return (
    <>
      <Dashboard
        email={user?.email}
        onLogout={user && logout}
        onVerify={(user && !user.emailVerified) ? verify : null}
        loginUrl={!user && pathname !== '/login' ? '/login' : null}
        signupUrl={!user && pathname !== '/signup' ? '/signup' : null}
      />

      {
        notification
          ? <div>{notification}</div>
          : <div>&nbsp;</div>
      }

      <Outlet />
    </>
  );
};

export default App;
