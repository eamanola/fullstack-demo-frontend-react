import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

import { actions as usersActions } from './users';
import { actions as notesActions } from './notes';
import { actions as emailVerificationActions } from './email-verification';
import { notification as notificationAction } from './reducers/notification';

import Dashboard from './components/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const user = useSelector((state) => state.user);
  const notification = useSelector(((state) => state.notification));

  useEffect(() => {
    dispatch(usersActions.fromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const initNotes = async () => {
        try {
          // await dispatch(notesActions.init(user));
        } catch ({ message }) {
          // dispatch(notificationAction(message));
        }
      };
      initNotes();
    } else {
      dispatch(notesActions.clear());
    }
  }, [user, dispatch]);

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
        onVerify={user && !user.emailVerified && verify}
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
