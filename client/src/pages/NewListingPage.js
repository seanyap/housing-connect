import NavBar from "../components/NavBar";
function NewListingPage() {
  return (
    <div className="wrapper">
      <h1>Post a new listing!</h1>
      <form>
        <fieldset>
          <label>
            <form>
              <p>Add images of your home!</p>
              <input type="file" />
            </form>
            <p>Address</p>
            <input type="text" placeholder="Enter an address" />

            <p>How many bedrooms?</p>
            <input type="number"></input>
            <p>How many bathrooms?</p>
            <input type="number"></input>
            <p>What is the rent price?</p>
            <input type="number"></input>
            <p>Income Range for potential renters/buyers </p>
            <input type="number"></input>
            <p>Required credit score of renters/buyers</p>
            <input type="number"></input>

            <div className="App">
              Are there any facilities available?
              <div className="topping">
                <input type="checkbox" id="Yes" name="Yes" value="Yes" />
                Yes
                <input type="checkbox" id="No" name="No" value="No" />
                No
              </div>
            </div>
            <p>Is there any other information you would like to add?</p>
            <input name="extrainfo" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
        //on submit button, redirect to dashboard page that will show listing
      </form>
    </div>
  );
}

export default NewListingPage;
