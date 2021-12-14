import React from "react";
import NavBar from "../components/NavBar";
import { Redirect } from "react-router";
// import axios from 'axios';

import "../styles/newlist.css";
class NewListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      firstName: "",
      lastName: "",
      address: "",
      borough: "brooklyn",
      bedrooms: "",
      bathrooms: "",
      rent: "",
      reqIncome: "",
      reqCredit: "",
      extrainfo: "",
      // lists: [new URLSearchParams(this.props.location.search).get('listingID')],
      lists: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name + " " + value);

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    // console.log(this.state.lists);
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/listings`, {
      // fetch('/api/listings', {
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
      .then((info) => {
        this.setState({
          lists: [info.id],
        });
      })
      .then((post) => {
        fetch(`${process.env.REACT_APP_API_ROUTE}/api/homeowner`, {
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
          });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  render() {
    if (this.state.success) return <Redirect to="/dashboard" />;

    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          There was an error saving this post.
        </div>
      );
    }

    return (
      <div className="newlist-container">
        <NavBar isLoggedIn={false} whiteBg={false} />
        {errorMessage}
        <form onSubmit={this.handleSubmit} id="newlisting">
          <h2 id="postname">New listing!</h2>
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
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              placeholder="Enter First Name"
              // id='address'
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              // id='address'
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
            />
          </div>
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
            <label htmlFor="borough">Borough:</label>
            <select
              id="borough"
              name="borough"
              value={this.state.borough}
              onChange={this.handleInputChange}
            >
              <option value="brooklyn">Brooklyn</option>
              <option value="manhattan">Manhattan</option>
              <option value="queens">Queens</option>
              <option value="bronx">Bronx</option>
              <option value="staten island">Staten Island</option>
            </select>
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
