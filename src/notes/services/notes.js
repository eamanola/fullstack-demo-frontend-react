import axios from 'axios';

import GenericError from '../../services/generic-error';

import config from '../../config';

const { BACKEND_URL } = config;

const create = async ({ token }, newNote) => {
  try {
    const { note } = (
      await axios.post(
        `${BACKEND_URL}/notes`,
        newNote,
        { headers: { authorization: `bearer ${token}` } },
      )
    ).data;

    return note;
  } catch (e) {
    const { message } = e?.response?.data || GenericError;
    throw new Error(message);
  }
};

const byId = async ({ token }, noteId) => {
  try {
    const { note } = (
      await axios.get(
        `${BACKEND_URL}/notes/${noteId}`,
        { headers: { authorization: `bearer ${token}` } },
      )
    ).data;

    return note;
  } catch (e) {
    const { message } = e?.response?.data || GenericError;
    throw new Error(message);
  }
};

const byOwner = async ({ token }) => {
  try {
    const { notes } = (
      await axios.get(
        `${BACKEND_URL}/notes`,
        { headers: { authorization: `bearer ${token}` } },
      )
    ).data;

    return notes;
  } catch (e) {
    const { message } = e?.response?.data || GenericError;
    throw new Error(message);
  }
};

const update = async ({ token }, updatedNote) => {
  try {
    const { note } = (
      await axios.put(
        `${BACKEND_URL}/notes/${updatedNote.id}`,
        updatedNote,
        { headers: { authorization: `bearer ${token}` } },
      )
    ).data;

    return note;
  } catch (e) {
    const { message } = e?.response?.data || GenericError;
    throw new Error(message);
  }
};

const remove = async ({ token }, noteId) => {
  try {
    await axios.delete(
      `${BACKEND_URL}/notes/${noteId}`,
      { headers: { authorization: `bearer ${token}` } },
    );
  } catch (e) {
    const { message } = e?.response?.data || GenericError;
    throw new Error(message);
  }
};

const noteService = {
  create,
  byId,
  byOwner,
  update,
  remove,
};

export default noteService;
