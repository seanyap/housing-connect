import React from "react";
import "./styles.css";
import "../../styles/index.css";

function NavBar() {
  return (
    // add id nav to up specificity because class has higher specificity than tag selector
    // this modifies the 85% to 90%
    <nav id="nav">
      <h1>Housing Connect</h1>
      <div>
        <a id="login" href="#">
          Login
        </a>
        <a id="signup" href="#">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
