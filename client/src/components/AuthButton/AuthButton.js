import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import '../../styles/index.css';
// import '../../styles/index.css';
// import '../NavBar/styles.css';

import { AuthContext } from '../../context/AuthContext';

const AuthButton = withRouter(({ history }) => {
  const auth = useContext(AuthContext);

  if (!auth.isAuthenticated) {
    return (
      <Link className='btn btn-primary' to='/login' id='signup'>
        Login / Sign Up
      </Link>
    );
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  };

  return (
    <div className='text-white' id='login'>
      Welcome! {auth.user.firstName}
      <button className='btn btn-primary' onClick={logout}>
        Logout
      </button>
    </div>
  );
});

export default AuthButton;
