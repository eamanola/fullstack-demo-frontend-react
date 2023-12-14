import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  logout as logoutAction,
  fromLocalStorage as fromLocalStorageAction,
} from './reducers/user';

import {
  init as initNotesAction,
  clear as clearNotesAction,
} from './reducers/notes';

import Dashboard from './components/Dashboard';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fromLocalStorageAction());
  }, []);

  useEffect(() => {
    if (user) {
      const initNotes = async () => {
        try {
          await dispatch(initNotesAction(user));
        } catch ({ message }) {
          console.log(message);
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
      console.log(message);
    }
  };

  return (
    <>
      <Dashboard
        email={user?.email}
        onLogout={user && logout}
        loginUrl={!user ? '/login' : null}
        signupUrl={!user ? '/signup' : null}
      />

      <Outlet />
    </>
  );
};

export default App;
