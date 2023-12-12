import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  add as addNoteAction,
  update as updateNoteAction,
  remove as removeNoteAction,
} from '../reducers/notes';

import NoteListItem from '../components/NoteListItem';

const NotesListPage = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes);
  const user = useSelector((state) => state.user);

  const addNote = async () => {
    try {
      await dispatch(addNoteAction(user, { text: 'foo', public: false }));
    } catch ({ message }) {
      console.log(message);
    }
  };

  const updateNote = async (updatedNote) => {
    try {
      dispatch(updateNoteAction(user, updatedNote));
    } catch ({ message }) {
      console.log(message);
    }
  };

  const toggleVisibility = (note) => updateNote({
    ...note,
    public: !note.public,
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
        <button type="button" onClick={addNote}>Add new</button>
      </div>
      {
        (notes || []).map((note) => (
          <NoteListItem
            key={note.id}
            text={note.text}
            isPublic={note.public}
            onToggleVisibility={() => toggleVisibility(note)}
            onRemove={() => removeNote(note)}
          />
        ))
      }
    </div>
  );
};

export default NotesListPage;
