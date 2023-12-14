import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  update as updateNoteAction,
  remove as removeNoteAction,
} from '../reducers/notes';

import NoteListItem from '../components/NoteListItem';

const NotesListPage = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes);
  const user = useSelector((state) => state.user);

  const updateNote = async (updatedNote) => {
    try {
      dispatch(updateNoteAction(user, updatedNote));
    } catch ({ message }) {
      console.log(message);
    }
  };

  const toggleVisibility = (note) => updateNote({
    ...note,
    isPublic: !note.isPublic,
  });

  const removeNote = async (note) => {
    try {
      dispatch(removeNoteAction(user, note));
    } catch ({ message }) {
      console.log(message);
    }
  };

  if (!user) return null;

  return (
    <div>
      <div>
        <Link to="/notes/new">Add new</Link>
      </div>
      {
        (notes || []).map((note) => (
          <NoteListItem
            key={note.id}
            editPage={`/notes/edit/${note.id}`}
            text={note.text}
            isPublic={note.isPublic}
            onToggleVisibility={() => toggleVisibility(note)}
            onRemove={() => removeNote(note)}
          />
        ))
      }
    </div>
  );
};

export default NotesListPage;
