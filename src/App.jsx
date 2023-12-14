import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

import {
  logout as logoutAction,
  fromLocalStorage as fromLocalStorageAction,
} from './reducers/user';

import {
  init as initNotesAction,
  clear as clearNotesAction,
} from './reducers/notes';

import { notification as notificationAction } from './reducers/notification';

import Dashboard from './components/Dashboard';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const notification = useSelector(((state) => state.notification));

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fromLocalStorageAction());
  }, []);

  useEffect(() => {
    if (user) {
      const initNotes = async () => {
        try {
          await dispatch(initNotesAction(user));
        } catch ({ message }) {
          dispatch(notificationAction(message));
        }
      };
      initNotes();
    } else {
      dispatch(clearNotesAction());
    }
  }, [user]);

  const logout = async () => {
    try {
      await dispatch(logoutAction());
    } catch ({ message }) {
      dispatch(notificationAction(message));
    }
  };

  return (
    <>
      <Dashboard
        email={user?.email}
        onLogout={user && logout}
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
