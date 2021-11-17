import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
//import ListingPage from "./pages/ListingPage";
//import NewListingPage from "./pages/NewListingPage"
import "./App.css";
//import GoogleApiWrapper from "./components/SideMap"





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
