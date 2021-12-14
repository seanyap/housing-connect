import React from "react";

import "./styles.css";
// import '../../styles/index.css';
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton/AuthButton";

function Login(props) {
  return (
    <a
      id="login"
      href="#"
      style={{
        backgroundColor: props.whiteBg ? "none" : "#eee",
        border: "1px solid #ddd",
      }}
    >
      Login
    </a>
  );
}

function SignUp(props) {
  return (
    <a
      id="signup"
      href="#"
      style={{
        backgroundColor: props.whiteBg ? "none" : "#eee",
        border: "1px solid #ddd",
      }}
    >
      Sign Up
    </a>
  );
}

class NavBar extends React.Component {
  render() {
    return (
      // add id nav to up specificity because class has higher specificity than tag selector
      // this modifies the 85% to 90%
      <div
        id="nav"
        style={{ backgroundColor: this.props.whiteBg ? "white" : "none" }}
      >
        <Link to="/">
          <h1 id="nav-logo">Housing Connect</h1>
        </Link>
        <Link id="dashboard" to="/tenant-dash">
          Dashboard
        </Link>

        {/* <AuthButton /> */}
        {/* {this.props.isLoggedIn ? (
          <Login whiteBg={this.props.whiteBg} />
        ) : (
          <SignUp whiteBg={this.props.whiteBg} />
        )} */}
      </div>
    );
  }
}

export default NavBar;
