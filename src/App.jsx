import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { actions as usersActions } from './users';
import { notification as notificationAction } from './reducers/notification';
import { actions as notesActions } from './notes';

import Dashboard from './components/Dashboard';
import Notification from './components/Notification';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(usersActions.fromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const initNotes = async () => {
        try {
          await dispatch(notesActions.init(user));
        } catch ({ message }) {
          dispatch(notificationAction(message));
        }
      };
      initNotes();
    } else {
      dispatch(notesActions.clear());
    }
  }, [user, dispatch]);

  return (
    <>
      <Dashboard />

      <Notification />

      <Outlet />
    </>
  );
};

export default App;
