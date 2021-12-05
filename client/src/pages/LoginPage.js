import React from 'react';
// import NavBar from '../components/NavBar';
import '../styles/login.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <div class='body'>
          <div class='login-body'>
            <div id='login'>
              <h2>Sign In</h2>
              <form class='login'>
                <label for='username'>Email Address</label>
                <input type='text' placeholder='Enter Email' name='username' />
                <br />
                <label for='password'>Password</label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  name='password'
                />
                <br />
                <p>Don't have an account? Sign up for one for free!</p>
                <input type='submit' value='Sign In' />
              </form>
            </div>
            <div id='signup-part'>
              <h2>Sign Up</h2>
              <form class='signup'>
                <label for='firstName'>First Name</label>
                <input
                  type='text'
                  placeholder='Enter First Name'
                  name='firstName'
                />
                <br />
                <label for='lastName'>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter Last Name'
                  name='lastName'
                />
                <br />
                <label for='email'>Email Address</label>
                {/* <br /> */}
                <input
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  required
                />
                <br />
                <label for='password'>Password</label>
                {/* <br /> */}
                <input
                  type='password'
                  placeholder='Enter New Password'
                  id='student-password'
                  name='password'
                  required
                />
                <br />
                <input type='submit' value='Sign Up' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
