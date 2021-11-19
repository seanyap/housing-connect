import React from "react";
import SearchBar from "../components/SearchBar";

class App extends React.Component {
  render() {
    return (
      <div id="landing" className="container inner">
        <h2>Find your next home</h2>
        <SearchBar />
      </div>
    );
  }
}

export default App;
