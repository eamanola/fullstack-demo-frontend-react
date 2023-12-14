import usersService from '../services/users';

const INITIAL_STATE = null;
const LSKey = 'loggedUser';

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'USER_SET':
      newState = { ...action.user };
      break;

    case 'USER_RM':
      newState = null;
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

const login = ({ email, password }, keepLoggedIn = true) => async (dispatch) => {
  const token = await usersService.fetchToken({ email, password });

  const user = { email, token };

  dispatch({ type: 'USER_SET', user });

  if (keepLoggedIn) {
    localStorage.setItem(LSKey, JSON.stringify(user));
  }
};

const logout = () => async (dispatch) => {
  localStorage.removeItem(LSKey);

  dispatch({ type: 'USER_RM' });
};

const fromLocalStorage = () => async (dispatch) => {
  const savedUser = localStorage.getItem(LSKey);

  if (savedUser) {
    const user = JSON.parse(savedUser);
    dispatch({ type: 'USER_SET', user });
  }
};

export {
  login,
  logout,
  fromLocalStorage,
};

export default reducer;
