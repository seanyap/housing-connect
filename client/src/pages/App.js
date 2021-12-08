import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
// } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

import '../index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div id='bg-image'></div>
        <div id='landing'>
          <h2 id='slogan'>Find your next home</h2>
          <SearchBar />
        </div>
      </>
    );
  }
}

export default App;
