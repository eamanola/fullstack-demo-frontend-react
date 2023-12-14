import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Dashboard = ({
  email,
  onLogout,
  loginUrl,
  signupUrl,
}) => (
  <div>
    { email && (
      <span>
        Hello&nbsp;
        {email}
      </span>
    )}
    { onLogout && <button type="button" onClick={onLogout}>logout</button> }
    { loginUrl && <Link to={loginUrl}>Login</Link> }
    { signupUrl && <Link to={signupUrl}>Signup</Link> }
  </div>
);

Dashboard.propTypes = {
  email: PropTypes.string,
  onLogout: PropTypes.func,
  loginUrl: PropTypes.string,
  signupUrl: PropTypes.string,
};

Dashboard.defaultProps = {
  email: null,
  onLogout: null,
  loginUrl: null,
  signupUrl: null,
};

export default Dashboard;
