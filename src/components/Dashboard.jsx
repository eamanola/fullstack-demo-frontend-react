import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Dashboard = ({
  email = null,
  onLogout = null,
  loginUrl = null,
  signupUrl = null,
  onVerify = null,
}) => (
  <div>
    { email && (
      <span>
        Hello&nbsp;
        {email}
      </span>
    )}

    { onLogout && <button type="button" onClick={onLogout}>logout</button> }

    { onVerify && <button type="button" onClick={onVerify}>verify</button> }

    { loginUrl && <Link to={loginUrl}>Login</Link> }

    { signupUrl && <Link to={signupUrl}>Signup</Link> }
  </div>
);

Dashboard.propTypes = {
  email: PropTypes.string,
  onLogout: PropTypes.func,
  loginUrl: PropTypes.string,
  signupUrl: PropTypes.string,
  onVerify: PropTypes.func,
};

export default Dashboard;
