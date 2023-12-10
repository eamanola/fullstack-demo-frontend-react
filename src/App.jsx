import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  login as loginAction,
  logout as logoutAction,
  fromLocalStorage as fromLocalStorageAction,
} from './reducers/user';

import {
  init as initNotesAction,
  clear as clearNotesAction,
  add as addNoteAction,
  update as updateNoteAction,
  remove as removeNoteAction,
} from './reducers/notes';

import userService from './services/users';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fromLocalStorageAction());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(initNotesAction(user));
    } else {
      dispatch(clearNotesAction());
    }
  }, [user]);

  const email = 'foo2@example.com';
  const password = '1223';

  const signup = async () => {
    try {
      await userService.create({ email, password });
    } catch ({ message }) {
      console.log(message);
    }
  };

  const login = async () => {
    try {
      await dispatch(loginAction({ email, password }));
    } catch ({ message }) {
      console.log(message);
    }
  };

  const logout = async () => {
    try {
      await dispatch(logoutAction());
    } catch ({ message }) {
      console.log(message);
    }
  };

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

  const removeNote = async (note) => {
    try {
      dispatch(removeNoteAction(user, note));
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <>
      <div>
        Hello &nbsp;
        { user ? user.email : 'react' }
      </div>
      <div>
        { !user && <button type="button" onClick={signup}>signup</button> }
        { !user && <button type="button" onClick={login}>login</button> }
        { !!user && <button type="button" onClick={logout}>logout</button> }

        {
          user && (
            <>
              <div>
                <button type="button" onClick={addNote}>Add new</button>
              </div>
              {
                (notes || []).map((note) => (
                  <div key={note.id}>
                    <span>
                      { note.text }
                      &nbsp;
                      { note.public ? 'public' : 'private' }
                    </span>
                    <button
                      type="button"
                      onClick={() => updateNote({ ...note, text: (note.text === 'foo' ? 'bar' : 'foo') })}
                    >
                      update text
                    </button>
                    <button
                      type="button"
                      onClick={() => updateNote({ ...note, public: !note.public })}
                    >
                      update visibility
                    </button>
                    <button type="button" onClick={() => removeNote(note)}>remove</button>
                  </div>
                ))
              }
            </>
          )
        }
      </div>
    </>
  );
};

export default App;
