import React from "react";

function SearchBar() {
  return (
    <div id="search">
      <input type="text" placeholder="Enter an address, city or ZIP code" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
