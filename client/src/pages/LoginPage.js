
import React from "react";
import NavBar from "../components/NavBar";
import "../styles/login.css";
import {Link, Redirect} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    failed: false,
     username: '',
     password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
     event.preventDefault();
    fetch('/api/users', {
 
    })
    .then(res => res.json()).then(data => console.log(data))
      }

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
        <div className="body">
          <div className="login-body">
            <div id="login">
              <h2 id="login-signin-heading">Sign In</h2>
              <form className="login" 
            onSubmit={this.handleSubmit}
            // action="http://localhost:3001/"
            // method="post"
          >
                <label htmlFor="username">Email Address</label>
                <input type="text" placeholder="Enter Email" name="username"value={this.state.username}
                onChange={this.handleInputChange} required/>
                <br />
                <label htmlFor='password'>Password</label>
                <input

                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                onChange={this.handleInputChange}
                required
                />
                <br />
                <p>Don't have an account?  <Link to="/signup"> Sign up here </Link></p>
               
                <input type="submit" value="Sign In" />
              </form>
            </div>
            {/* //here sign up */}
            </div>
          </div>
        </div>

      // </div>
    );
  }
}

LoginPage.contextType = AuthContext;

export default LoginPage;
