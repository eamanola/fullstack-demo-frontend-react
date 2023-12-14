import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { update as updateNoteAction } from '../reducers/notes';

import NotesEditForm from '../components/NotesEditForm';

const NotesEditPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { noteId } = useParams();
  const note = useSelector((state) => state.notes.find(({ id }) => id === noteId));
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const {
      text: textInput,
      imageUrl: imageUrlInput,
      isPublic: isPublicInput,
    } = e.target.elements;

    const text = textInput.value;
    const isPublic = isPublicInput.checked;
    const imageUrl = imageUrlInput.value || null;

    const updatedNote = {
      ...note,
      text,
      isPublic,
      imageUrl,
    };

    try {
      await dispatch(updateNoteAction(user, updatedNote));

      navigate('/');
    } catch ({ message }) {
      console.log(message);
    }
  };

  if (!user || !note) return null;

  return (
    <NotesEditForm
      onSubmit={onSubmit}
      text={note.text}
      isPublic={note.isPublic}
      imageUrl={note.imageUrl}
    />
  );
};

export default NotesEditPage;
