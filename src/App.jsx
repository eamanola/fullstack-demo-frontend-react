import React from 'react';

/*
import userService from './services/users';
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
const App = () => (
  <div>Hello react</div>
);

export default App;
