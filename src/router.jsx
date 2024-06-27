import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { router as notesRouter } from './notes';
import { router as usersRouter } from './users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...usersRouter,
      ...notesRouter,
    ],
  },
]);

export default router;
