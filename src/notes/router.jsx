import React from 'react';
import NotesListPage from './pages/NotesListPage';
import NotesEditPage from './pages/NotesEditPage';
import NotesNewPage from './pages/NotesNewPage';

const router = [
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
];

export default router;
