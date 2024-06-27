import services from '../services/email-verification';
import { notification } from '../../reducers/notification';

const reducer = () => null;

const request = (email) => async (dispatch) => {
  const success = await services.request(email);
  dispatch(notification(success ? 'requested' : 'something went wrong'));
};

export {
  request,
};

export default reducer;
