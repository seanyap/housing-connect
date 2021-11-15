import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import "./App.css";


//import NewListingPage from "./pages/NewListingPage"



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
