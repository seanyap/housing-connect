import React from "react";

import "./styles.css";
import "../../styles/index.css";

function Login(props) {
  return (
    <a id="login" href="#">
      Login
    </a>
  );
}

function SignUp(props) {
  return (
    <a id="signup" href="#">
      Sign Up
    </a>
  );
}

function NavBar(props) {
  const userStatusUI = props.isLoggedIn ? <Login /> : <SignUp />;

  return (
    // add id nav to up specificity because class has higher specificity than tag selector
    // this modifies the 85% to 90%
    <nav id="nav">
      <h1>Housing Connect</h1>
      {userStatusUI}
    </nav>
  );
}

export default NavBar;
