import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { add as addNoteAction } from '../reducers/notes';
import { notification as notificationAction } from '../reducers/notification';

import NotesEditForm from '../components/NotesEditForm';

const NotesEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const addNote = async (newNote) => {
    try {
      await dispatch(addNoteAction(user, newNote));
      navigate('/');
    } catch ({ message }) {
      dispatch(notificationAction(message));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const {
      text: textInput,
      imageUrl: imageUrlInput,
      isPublic: isPublicInput,
    } = e.target.elements;

    const text = textInput.value;
    const isPublic = isPublicInput.checked;
    const imageUrl = imageUrlInput.value || null;

    addNote({ text, isPublic, imageUrl });
  };

  if (!user) return null;

  return <NotesEditForm onSubmit={onSubmit} />;
};

export default NotesEditPage;
