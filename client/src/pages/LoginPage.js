import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import NavBar from '../components/NavBar';
import '../styles/login.css';

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    email: '',
    password: '',
  };

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    };
  };

  login = (e) => {
    e.preventDefault();
    const auth = this.context;
    let { email, password } = this.state;
    auth
      .authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = '';
    if (failed) {
      err = (
        <div className='alert alert-danger' role='alert'>
          Login Failed
        </div>
      );
    }

    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div class='body'>
          <div class='login-body'>
            <div id='login'>
              <h2 id='login-signin-heading'>Sign In</h2>
              <form class='login' onSubmit={this.login}>
                {err}
                <label for='username'>Email Address</label>
                <input
                  type='text'
                  placeholder='Enter Email'
                  name='username'
                  value={this.state.email}
                  onChange={this.fieldChanged('email')}
                />
                <br />
                <label for='password'>Password</label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.fieldChanged('password')}
                />
                <br />
                <p>Don't have an account? Sign up for one for free!</p>
                <input type='submit' value='Sign In' />
              </form>
            </div>
            <div id='signup-part'>
              <h2 id='login-signup-heading'>Sign Up</h2>
              <form class='signup'>
                <div class='checkboxes'>
                  <div class='check'>
                    <input
                      type='checkbox'
                      id='1'
                      name='box'
                      class='boxes'
                      onclick='onlyOne(this.id)'
                    />
                    <label for='student-box'>Homeowner</label>
                  </div>
                  <div class='check'>
                    <input
                      type='checkbox'
                      id='2'
                      class='boxes'
                      onclick='onlyOne(this.id)'
                    />
                    <label for='instructor-box'>Tenant</label>
                  </div>
                </div>
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
                <input
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  required
                />
                <br />
                <label for='password'>Password</label>
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
      // <div>
      //   <NavBar isLoggedIn={false} whiteBg={false} />

      //   <form onSubmit={this.login}>
      //     <div className='form-row'>
      //       {err}
      //       <input
      //         type='email'
      //         className='form-control'
      //         name='email'
      //         placeholder='Email'
      //         value={this.state.email}
      //         onChange={this.fieldChanged('email')}
      //       />
      //       <input
      //         type='password'
      //         className='form-control'
      //         name='password'
      //         placeholder='Password'
      //         value={this.state.password}
      //         onChange={this.fieldChanged('password')}
      //       />
      //       <button type='submit' className='btn btn-primary ml-auto'>
      //         Login
      //       </button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

LoginPage.contextType = AuthContext;

export default LoginPage;
