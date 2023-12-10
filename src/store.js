import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { withExtraArgument } from 'redux-thunk';

import userReducer from './reducers/user';

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(
  reducers,
  undefined, /* INITIAL_STATE */
  applyMiddleware(withExtraArgument()),
);

export default store;
