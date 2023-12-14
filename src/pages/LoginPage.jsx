import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { login as loginAction } from '../reducers/user';

import EmailPasswordForm from '../components/EmailPasswordForm';

import { DEV_USER_EMAIL, DEV_USER_PASSWORD } from '../config';

const LoginPage = ({ from = '/' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      await dispatch(loginAction({ email, password }));
      navigate(from);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const {
      email: emailInput,
      password: passwordInput,
    } = e.target.elements;

    const email = emailInput.value;
    const password = passwordInput.value;

    await login(email, password);
  };

  return (
    <>
      <EmailPasswordForm onSubmit={onSubmit}>
        <button type="submit">login</button>
        {
          DEV_USER_EMAIL && (
            <button
              type="button"
              onClick={() => login({
                email: DEV_USER_EMAIL,
                password: DEV_USER_PASSWORD,
              })}
            >
              dev user
            </button>
          )
        }
      </EmailPasswordForm>
      <Link to="/signup">signup</Link>
    </>
  );
};

LoginPage.propTypes = {
  from: PropTypes.string,
};

LoginPage.defaultProps = {
  from: '/',
};

export default LoginPage;
