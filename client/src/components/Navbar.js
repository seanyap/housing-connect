import React from "react";

function NavBar() {
  return (
    <nav>
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
