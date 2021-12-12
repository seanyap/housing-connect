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
      reqIncome: "",
      address: "",
      reqCredit: "",
      extrainfo: "",
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
    console.log(this.state);
    event.preventDefault();
    fetch("/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {
        this.setState({
          success: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  render() {
    return (
      <div class="newlist-container">
        <NavBar isLoggedIn={false} whiteBg={false} />
        <form onSubmit={this.handleSubmit} id="newlisting">
          <h1 id="postname">New listing!</h1>
          {/* <label htmlFor="images"> Images: </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  value={this.state.images}
                  onChange={this.handleInputChange}
                  required
                /> */}
          <div id="input-block">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input
              type="number"
              placeholder="Bedrooms"
              id="bedrooms"
              name="bedrooms"
              value={this.state.bedrooms}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="bathrooms">Bathrooms:</label>
            <input
              type="number"
              placeholder="Bathrooms"
              id="bathrooms"
              name="bathrooms"
              value={this.state.bathrooms}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="rentprice">Rent price:</label>
            <input
              type="number"
              placeholder="$ "
              id="rent"
              name="rent"
              value={this.state.rent}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="income">
              Income Range for potential renters/buyers:
            </label>
            <input
              type="number"
              placeholder="$ "
              id="income"
              name="reqIncome"
              value={this.state.income}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="credit">
              Required credit score of renters/buyers:
            </label>
            <input
              type="number"
              placeholder="Credit score"
              id="credit"
              name="reqCredit"
              value={this.state.credit}
              onChange={this.handleInputChange}
              required
            />
          </div>
          {/* 
                <div class="checkboxes">
                  <label for="facilities">
                    Are there any facilities available?
                  </label>
                  <input type="radio" id="Yes" name="YesNo" value="Yes" />
                  <label for="Yes">Yes</label>
                  <input type="radio" id="No" name="YesNo" value="No" />
                  <label for="No">No</label>
                </div> 
                */}
          <div id="input-block">
            <label htmlFor="extrainfo">
              Is there any other information you would like to add?
            </label>
            <input
              type="text"
              id="extrainfo"
              name="extrainfo"
              value={this.state.extrainfo}
              onChange={this.handleInputChange}
            />
          </div>

          <input id="listing-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewListingPage;
