import React from "react";
import NavBar from "../components/NavBar";

import "../styles/newlist.css";
class NewListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "",
      bathrooms: "",
      rent: "",
      income: "",
      address: "",
      credit: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
     event.preventDefault();
    fetch('/api/Listings', {
 
    })
    .then(res => res.json()).then(data => console.log(data))
      }
    
  //     .catch((error) => console.log(error.message));
  // };
  //   fetch('/api/listing', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(this.state),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.props.history.push("/Listing has been posted!");
  //     })

  //     .catch((error) => console.log(error.message));
  // };

  render() {
    return (
      <>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div class="newlist-container">
          <form
            onSubmit={this.handleSubmit}
            // action="http://localhost:3001/"
            // method="post"
          >
            <div class="formlist-container">
              <h1 id="postname"> New listing!</h1>
              <label for="images"> Images: </label>
            <input type="file" id="images" name="images" value={this.state.images}
                onChange={this.handleInputChange}required />
            <br />

              <label for="address"> Address: </label>
              <input
                type="text"
                placeholder="Address"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label for="bedrooms"> Bedrooms: </label>
              <input
                type="number"
                placeholder="Bedrooms"
                id="bedrooms"
                name="bedrooms"
                value={this.state.bedrooms}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label for="bathrooms"> Bathrooms: </label>
              <input
                type="number"
                placeholder="Bathrooms"
                id="bathrooms"
                name="bathrooms"
                value={this.state.bathrooms}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label for="rentprice"> Rent price: </label>
              <input
                type="number"
                placeholder="$ "
                id="rent"
                name="rent"
                value={this.state.rent}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label for="income">
                {" "}
                Income Range for potential renters/buyers:
              </label>
              <input
                type="number"
                placeholder="$ "
                id="income"
                name="income"
                value={this.state.income}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label for="credit">
                {" "}
                Required credit score of renters/buyers:
              </label>
              <input
                type="number"
                placeholder="Credit score"
                id="credit"
                name="credit"
                value={this.state.credit}
                onChange={this.handleInputChange}
                required
              />
              {/* <br />
              <div class="checkboxes">
                <label for="facilities">
                  Are there any facilities available?
                </label>
                <input type="radio" id="Yes" name="YesNo" value="Yes" />
                <label for="Yes">Yes</label>
                <input type="radio" id="No" name="YesNo" value="No" />
                <label for="No">No</label>
                
              </div> */}
              <br/>
              <label for="extrainfo">
                Is there any other information you would like to add?
              </label>
              <br />

              <input type="text" id="extrainfo" name="extrainfo"  value={this.state.extrainfo}
                onChange={this.handleInputChange}/>
              <br />
              <button class="submitbutton" button type="submit">
                Submit listing!
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default NewListingPage;
