import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SideMap from "../components/SideMap";
import ListItem from "../components/ListItem";

import "../styles/result.css";

export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: 0,
      address: "",
      listItems: [],
    };
  }

  componentDidMount() {
    // TODO: add logic to fetch for list items & instantiate the ListItem component
    fetch("/api/listings")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ rent: data.rent, address: data.address })
      );
  }

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
              <ListItem
                id="post"
                name="1"
                rent={this.state.rent}
                address={this.state.address}
              ></ListItem>
              <ListItem
                id="post"
                name="2"
                rent={this.state.rent}
                address={this.state.address}
              ></ListItem>
              <ListItem
                id="post"
                name="3"
                rent={this.state.rent}
                address={this.state.address}
              ></ListItem>
            </div>
          </div>
        </div>
      </>
    );
  }
}
