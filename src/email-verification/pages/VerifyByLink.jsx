import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { notification } from '../../reducers/notification';
import { setEmailVerified } from '../../users/reducers/user';

const VerifyByLink = () => {
  const { status } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'success') {
      dispatch(setEmailVerified());
    } else {
      dispatch(notification('Something went wrong'));
    }

    navigate('/');
  }, [status, dispatch, navigate]);

  return null;
};

export default VerifyByLink;
