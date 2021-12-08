import React from "react";
import NavBar from "../components/NavBar";
import "../styles/login.css";
import {Link} from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     username: '',
     password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    fetch('/api/Listings', {
 
    })
    .then(res => res.json()).then(data => console.log(data))
      }
    
  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div class="body">
          <div class="login-body">
            <div id="login">
              <h2 id="login-signin-heading">Sign In</h2>
              <form class="login" 
            onSubmit={this.handleSubmit}
            // action="http://localhost:3001/"
            // method="post"
          >
                <label for="username">Email Address</label>
                <input type="text" placeholder="Enter Email" name="username"value={this.state.username}
                onChange={this.handleInputChange} required/>
                <br />
                <label for="password">Password</label>
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

export default LoginPage;
