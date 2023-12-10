import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  login as loginAction,
  logout as logoutAction,
  fromLocalStorage as fromLocalStorageAction,
} from './reducers/user';

import userService from './services/users';

/*
import noteService from './services/notes';

// userService.create({ password: 'dsssd', email: 'foo1@example.com' });

userService.fetchToken({ password: 'dsssd', email: 'foo1@example.com' })
  .then(async (token) => {
    const note = await noteService.create({ token }, { public: false, text: 'foo' });

    return { note, token };
  })
  .then(async ({ note, token }) => {
    const noteById = await noteService.byId({ token }, note.id);
    console.log(noteById);

    return { token };
  })
  .then(async ({ token }) => {
    const notesByOwner = await noteService.byOwner({ token });
    console.log(notesByOwner);

    return { token, note: notesByOwner[0] };
  })
  .then(async ({ token, note }) => {
    const updateNote = await noteService.update({ token }, { ...note, text: 'bar' });
    console.log(updateNote);

    return { token, note: updateNote };
  })
  .then(async ({ token, note }) => {
    await noteService.remove({ token }, note.id);

    const removedNote = await noteService.byId({ token }, note.id);
    console.log(removedNote);

    const notesByOwner = await noteService.byOwner({ token });
    console.log(notesByOwner);
  });
*/
const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fromLocalStorageAction());
  }, []);

  const email = 'foo2@example.com';
  const password = '1223';

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

  const signup = async () => {
    try {
      await userService.create({ email, password });
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
      </div>
    </>
  );
};

export default App;
