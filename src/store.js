import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { withExtraArgument } from 'redux-thunk';

import userReducer from './reducers/user';
import notesReducer from './reducers/notes';

const reducers = combineReducers({
  user: userReducer,
  notes: notesReducer,
});

const store = createStore(
  reducers,
  undefined, /* INITIAL_STATE */
  applyMiddleware(withExtraArgument()),
);

export default store;
