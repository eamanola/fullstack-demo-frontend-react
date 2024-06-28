import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { actions as usersActions } from './users';

import Dashboard from './components/Dashboard';

const App = () => {
  const dispatch = useDispatch();

  const notification = useSelector(((state) => state.notification));

  useEffect(() => {
    dispatch(usersActions.fromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Dashboard />

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
