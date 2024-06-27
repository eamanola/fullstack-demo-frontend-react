import services from '../services/email-verification';
import { notification } from '../../reducers/notification';
import { setEmailVerified } from '../../users/reducers/user';

const reducer = () => null;

const request = (email) => async (dispatch) => {
  const success = await services.request(email);
  dispatch(notification(success ? 'you should receive an email shortly' : 'something went wrong'));
};

const verifyByCode = (user, code) => async (dispatch) => {
  try {
    const success = await services.verifyByCode(user, code);
    if (success) {
      dispatch(setEmailVerified());
    }
  } catch (err) {
    dispatch(notification(err.message));
  }
};

export {
  request,
  verifyByCode,
};

export default reducer;
