import { createStore, combineReducers, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';

import userReducer from './reducers/user';
import notificationReducer from './reducers/notification';
import { reducer as notesReducer } from './notes';

const reducers = combineReducers({
  user: userReducer,
  notes: notesReducer,
  notification: notificationReducer,
});

const store = createStore(
  reducers,
  undefined, /* INITIAL_STATE */
  applyMiddleware(withExtraArgument()),
);

export default store;
