import React from "react";
import "../styles/newlist.css";
//mport "../index.css";
function NewListingPage() {
  return (

    <div class="newlist-container">
    
      <form>
      <h1 id = "postname"> Get started with your new listing!</h1>
      <div class="formlist-container">
        <label for="images"> Add images of your home! </label><br/>
        <input type="file" id="images" name="images" required /><br/>
        <label for="address"> Enter an address! </label>
        <input
          type="text"
          placeholder="Address"
          id="address"
          name="address"
          required
        /><br/>
        <label for="bedrooms"> Enter amount of bedrooms! </label>
        <input
          type="text"
          placeholder="Bedrooms"
          id="bedrooms"
          name="bedrooms"
          required
        /><br/>
        <label for="bathrooms"> Enter amount of bathrooms! </label>
        <input
          type="text"
          placeholder="Bathrooms"
          id="bathrooms"
          name="bathrooms"
          required
        /><br/>
        <label for="rentprice"> What is the rent price? </label>
        <input type="number" placeholder="$ " id="rent" name="rent" required /><br/>
        <label for="income"> Income Range for potential renters/buyers</label>
        <input
          type="number"
          placeholder="$ "
          id="income"
          name="income"
          required
        /><br/>
        <label for="income"> Required credit score of renters/buyers</label>
        <input
          type="number"
          placeholder="Credit score"
          id="credit"
          name="credit"
          required
        /><br/>
        <div class="checkboxes">
          <label for="income"> Are there any facilities available?</label>
          <input type="radio" id="Yes" name="YesNo" value="Yes" />
          <label for="Yes">Yes</label>
          <input type="radio" id="No" name="YesNo" value="No" />
          <label for="No">No</label>
        </div>
        <label for="extrainfo">
          {" "}
          Is there any other information you would like to add?{" "}
        </label>
        <br/>
        
        <input type="text" id="extrainfo" name="extrainfo" />
        <br/>
        <button class="submitbutton" button type="submit">
          Submit listing!
        </button>
        </div>
      </form>
    </div>
  );
}


export default NewListingPage;
