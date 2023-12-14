import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { update as updateNoteAction } from '../reducers/notes';
import { notification as notificationAction } from '../reducers/notification';

import NotesEditForm from '../components/NotesEditForm';

const NotesEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { noteId } = useParams();

  const user = useSelector((state) => state.user);
  const note = useSelector((state) => state.notes.find(({ id }) => id === noteId));

  const updateNote = async (updatedNote) => {
    try {
      await dispatch(updateNoteAction(user, updatedNote));

      navigate('/');
    } catch ({ message }) {
      dispatch(notificationAction(message));
    }
  };

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

    updateNote({
      ...note,
      text,
      isPublic,
      imageUrl,
    });
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
