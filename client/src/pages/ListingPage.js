
import React from "react";
//import info component
import '../styles/listing.css'
function ListingPage() {
     
  return (
    
    <div className="listings"> 
       
       <div className= "postings">
    <form>
     
      <p>Images of the house</p>
      <p>
        Information on house ie. price, location, details given by landlord{" "}
      </p>
      <button type="submit">Schedule a visit!</button>
    </form>
    </div>
    </div>
  );

}


//button to schedule visit
//user gets to this page when they click on a particular listing on results page that has mutiple listings
export default ListingPage;
