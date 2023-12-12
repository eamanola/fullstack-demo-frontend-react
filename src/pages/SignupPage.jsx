import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import userService from '../services/users';

import { login as loginAction } from '../reducers/user';

import EmailPasswordForm from '../components/EmailPasswordForm';

// const email = 'foo2@example.com';
// const password = '1223';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    await dispatch(loginAction({ email, password }));
    navigate('/');
  };

  const signup = async (e) => {
    e.preventDefault();

    const {
      email: emailInput,
      password: passwordInput,
      confirmPassword: confirmPasswordInput,
    } = e.target.elements;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    try {
      if (confirmPassword !== password) {
        throw new Error('passwords dont match');
      }

      await userService.create({ email, password });
      await login({ email, password });
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <>
      <EmailPasswordForm onSubmit={signup}>
        <input
          type="password"
          placeholder="confirm password"
          required
          name="confirmPassword"
        />
        <button type="submit">signup</button>
      </EmailPasswordForm>
      <Link to="/login">login</Link>
    </>
  );
};

export default SignupPage;
