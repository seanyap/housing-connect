import React from "react";

function SearchBar() {
  return (
    <div id="search">
      <form action="/houses" method="GET">
        <input
          name="location"
          type="text"
          placeholder="Enter an address, city or ZIP code"
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
