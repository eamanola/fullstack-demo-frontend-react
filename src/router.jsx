import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import App from './App';
import { router as notesRouter } from './notes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      ...notesRouter,
    ],
  },
]);

export default router;
