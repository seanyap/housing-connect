import React from "react";

import "./styles.css";

function SearchBar() {
  return (
    <form id="bar" action="/houses" method="GET">
      <input
        id="location"
        name="location"
        type="text"
        placeholder="Enter an address, city or ZIP code"
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
