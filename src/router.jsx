import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { router as usersRouter } from './users';
import { router as emailVerificationRouter } from './email-verification';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...usersRouter,
      ...emailVerificationRouter,
    ],
  },
]);

export default router;
