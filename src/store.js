import { createStore, combineReducers, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';

import { reducer as userReducer } from './users';
import notificationReducer from './reducers/notification';

const reducers = combineReducers({
  user: userReducer,
  notification: notificationReducer,
});

const store = createStore(
  reducers,
  undefined, /* INITIAL_STATE */
  applyMiddleware(withExtraArgument()),
);

export default store;
