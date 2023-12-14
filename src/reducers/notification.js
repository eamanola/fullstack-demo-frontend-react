const INITIAL_STATE = null;

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'NOTIFICATION_SET':
      newState = action.message;
      break;

    case 'NOTIFICATION_RM':
      newState = null;
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

let notificationTimeout;

const clear = () => (dispatch) => {
  dispatch({ type: 'NOTIFICATION_RM' });
};

const notification = (message) => async (dispatch) => {
  if (notificationTimeout) clearTimeout(notificationTimeout);

  dispatch({ type: 'NOTIFICATION_SET', message });

  notificationTimeout = setTimeout(() => clear()(dispatch), 5000);
};

export {
  notification,
  clear,
};

export default reducer;
