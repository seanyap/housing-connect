import React, { Component } from "react";
import SideMap from "../components/SideMap";
import ListItem from "../components/ListItem";

export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    // TODO: add logic to fetch for list items & instantiate the ListItem component
  }

  render() {
    return (
      <div id="map-container">
        <SideMap></SideMap>
        {/* TODO: run js loop to instantiate all list item in our state*/}
        {/* 3 dummy placeholder */}
        <ListItem name="1"></ListItem>
        <ListItem name="2"></ListItem>
        <ListItem name="3"></ListItem>
      </div>
    );
  }
}
