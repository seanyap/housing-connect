import React, { Component } from "react";
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
    return (
      <div id="result-container">
        {/* TODO: disable map rendering when in mobile device*/}
        <SideMap></SideMap>
        {/* TODO: run js loop to instantiate all list item in our state*/}
        {/* 3 dummy placeholder */}
        <div id="posts">
          <ListItem
            id="post"
            name="1"
            rent={this.state.rent}
            address={this.state.address}
            img="../../images/list-items-examples/apt-1.jpeg"
          ></ListItem>
          <ListItem
            id="post"
            name="2"
            rent={this.state.rent}
            address={this.state.address}
            img="../../images/list-items-examples/apt-2.jpeg"
          ></ListItem>
          <ListItem
            id="post"
            name="3"
            rent={this.state.rent}
            address={this.state.address}
            img="../../images/list-items-examples/apt-3.jpeg"
          ></ListItem>
        </div>
      </div>
    );
  }
}
