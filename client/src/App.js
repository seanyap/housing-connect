import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
