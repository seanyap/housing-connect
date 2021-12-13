import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SideMap from "../components/SideMap";
import ListItem from "../components/ListItem";
import { Link, Redirect } from "react-router-dom";
import "../styles/result.css";
import Posts from "../components/Posts";
export default class ResultPage extends Component {
  state = {
    listings: [],
  };
  componentDidMount() {
    fetch("/api/listings")
      .then((res) => res.json())
      .then((listings) => {
        this.setState({
          listings: listings.map((listing, i) => (
            <Posts {...listing} key={i} />
          )),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rent: 0,
  //     address: "",
  //     listItems: [],
  //   };
  // }

  // componentDidMount() {
  //   // TODO: add logic to fetch for list items & instantiate the ListItem component
  //   fetch("/api/listings")
  //     .then((res) => res.json())
  //     .then((listing) =>
  //       this.setState({ rent: listing.rent, address: listing.address })
  //     );
  // }

  render() {
    const search = this.props.location.search;
    const locationName = new URLSearchParams(search)
      .get("location")
      .toLowerCase();
    // accounts for empty search (perhaps also add required to input form)
    const formattedLocationName =
      locationName !== ""
        ? locationName.charAt(0).toUpperCase() + locationName.slice(1)
        : "Random";

    return (
      <>
        <NavBar isLoggedIn={false} whiteBg={true} />
        <div id="result-container">
          <Link to="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
          {/* TODO: disable map rendering when in mobile device*/}
          <SideMap></SideMap>
          {/* TODO: run js loop to instantiate all list item in our state*/}
          {/* 3 dummy placeholder */}
          <div id="right">
            <div id="result-location">
              <h2>
                Apartments for rent in{" "}
                <span style={{ color: "#f9b616" }}>
                  {formattedLocationName}
                </span>
              </h2>
            </div>
            <div id="result-posts">
              {this.state.listings}
              <Link to="/tenant-info" className="btn btn-primary">
                Schedule a Visit
              </Link>
              {/* <Posts
              
                id="post"
                name="1"
                
                rent={this.state.listings}
                address={this.state.listings}
              ></Posts>
              <Posts
                id="post"
                name="2"
                rent={this.state.listing}
                address={this.state.listing}
              ></Posts>
              <Posts
                id="post"
                name="3"
                rent={this.state.listing}
                address={this.state.listing}
              ></Posts> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
