import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { actions as usersActions } from './users';

import Dashboard from './components/Dashboard';
import Notification from './components/Notification';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.fromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Dashboard />

      <Notification />

      <Outlet />
    </>
  );
};

export default App;
