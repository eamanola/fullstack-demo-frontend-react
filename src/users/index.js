import reducer, { login, logout, fromLocalStorage } from './reducers/user';
import router from './router';

const actions = { login, logout, fromLocalStorage };

export {
  actions,
  reducer,
  router,
};

export default null;
