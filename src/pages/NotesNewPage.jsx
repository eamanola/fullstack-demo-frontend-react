import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { add as addNoteAction } from '../reducers/notes';

import NotesEditForm from '../components/NotesEditForm';

const NotesEditPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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

    const newNote = { text, public: isPublic, imageUrl };

    try {
      await dispatch(addNoteAction(user, newNote));
      navigate('/');
    } catch ({ message }) {
      console.log(message);
    }
  };

  if (!user) return null;

  return <NotesEditForm onSubmit={onSubmit} />;
};

export default NotesEditPage;
