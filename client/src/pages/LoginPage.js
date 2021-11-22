import React from 'react';
// import NavBar from '../components/NavBar';
import '../styles/login.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div class='page'>
          <div class='login'>
            <h2>Sign In</h2>
            <label for='uname'>Email Address</label>
            <input
              type='text'
              placeholder='Enter Email'
              name='uname'
              required
            />
            <br />
            <label for='passw'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
            <br />
            <button class='loginbtn' type='submit'>
              Log In
            </button>
          </div>
          <div class='signup'>
            <h2>Sign Up</h2>
            <div class='checkboxes'>
              <div class='check'>
                <input type='checkbox' id='tenant-check' />
                <label for='tenant-check'>Tenant</label>
              </div>

              <div class='check'>
                <input type='checkbox' id='owner-check' />
                <label for='owner-check'>Homeowner</label>
              </div>
            </div>

            <label for='fname'>Full Name</label>
            <input
              type='text'
              placeholder='Enter Full Name'
              name='fname'
              required
            />
            <br />
            <label for='uname'>Email Address</label>
            <input
              type='text'
              placeholder='Enter Email'
              name='uname'
              required
            />
            <br />
            <label for='passw'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
            <br />
            <label for='confirm'>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirm'
              required
            />
            <br />
            <button class='signupbtn' type='submit'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
