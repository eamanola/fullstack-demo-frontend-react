import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotesListPage from './pages/NotesListPage';
import NotesEditPage from './pages/NotesEditPage';
import NotesNewPage from './pages/NotesNewPage';

import App from './App';

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
      {
        path: 'notes/new',
        element: <NotesNewPage />,
      },
      {
        path: 'notes/edit/:noteId',
        element: <NotesEditPage />,
      },
      {
        index: true,
        element: <NotesListPage />,
      },
    ],
  },
]);

export default router;
