import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import userService from '../services/users';

import { login as loginAction } from '../reducers/user';

import EmailPasswordForm from '../components/EmailPasswordForm';

const LoginPage = ({ from = '/' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = async () => {
    const email = 'foo2@example.com';
    const password = '1223';
    try {
      await userService.create({ email, password });
    } catch ({ message }) {
      console.log(message);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    const {
      email: emailInput,
      password: passwordInput,
    } = e.target.elements;

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      await dispatch(loginAction({ email, password }));
      navigate(from);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <>
      <EmailPasswordForm onSubmit={login}>
        <button type="submit">login</button>
      </EmailPasswordForm>
      <button type="button" onClick={signup}>signup</button>
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
