
import React from "react";
//import info component

function ListingPage() {
  return (
    <form>
      <p>Images of the house</p>
      <p>
        Information on house ie. price, location, details given by landlord{" "}
      </p>
      <button type="submit">Schedule a visit!</button>
    </form>
  );
}

//button to schedule visit
//user gets to this page when they click on a particular listing on results page that has mutiple listings
export default ListingPage;
