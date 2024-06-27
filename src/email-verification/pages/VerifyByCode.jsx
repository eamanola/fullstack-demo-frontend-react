import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { verifyByCode } from '../reducers/email-verification';

const VerifyByCode = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: code } = e.target.elements.code;

    dispatch(verifyByCode(user, code));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" type="text" />
      <button type="submit">verify</button>
    </form>
  );
};

export default VerifyByCode;
