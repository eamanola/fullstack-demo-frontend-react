import notesService from '../services/notes';

const INITIAL_STATE = [];

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'NOTES_INIT':
      newState = [...action.notes];
      break;

    case 'NOTES_CLEAR':
      newState = [];
      break;

    case 'NOTES_ADD':
      newState = [...state, { ...action.note }];
      break;

    case 'NOTES_RM':
      newState = state.filter(({ id }) => id !== action.note.id);
      break;

    case 'NOTES_REPLACE':
      newState = state.map(
        ({ id, ...rest }) => (id === action.note.id ? { ...action.note } : { id, ...rest }),
      );
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

const init = (user) => async (dispatch) => {
  const notes = await notesService.byOwner(user);

  dispatch({ type: 'NOTES_INIT', notes });
};

const clear = () => (dispatch) => {
  dispatch({ type: 'NOTES_CLEAR' });
};

const add = (user, newNote) => async (dispatch) => {
  const note = await notesService.create(user, newNote);

  dispatch({ type: 'NOTES_ADD', note });
};

const remove = (user, note) => async (dispatch) => {
  await notesService.remove(user, note.id);

  dispatch({ type: 'NOTES_RM', note });
};

const update = (user, updatedNote) => async (dispatch) => {
  const note = await notesService.update(user, updatedNote);

  dispatch({ type: 'NOTES_REPLACE', note });
};

export {
  init,
  clear,
  add,
  remove,
  update,
};

export default reducer;
