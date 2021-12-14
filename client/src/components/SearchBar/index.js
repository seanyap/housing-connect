import React from "react";
import { Link, Redirect } from "react-router-dom";

import "./styles.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      submit: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    console.log("key pressed");
    if (event.key == "Enter" || event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const userInput = this.state.value.toLowerCase();
    switch (userInput) {
      case "manhattan":
      case "brooklyn":
      case "queens":
      case "bronx":
      case "staten island":
        this.setState({ submit: true });
        break;
      default:
        alert("Enter a valid NYC Borough!");
    }
  }

  render() {
    if (this.state.submit) {
      console.log("submitting");
      return <Redirect to={`/houses?location=${this.state.value}`} />;
    }

    return (
      <div id="bar">
        <input
          id="location"
          name="location"
          type="text"
          onChange={this.handleInputChange}
          placeholder="Enter a borough where you want to live"
        />
        <input
          id="btn"
          type="submit"
          value="Search"
          onClick={this.handleSubmit}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default SearchBar;
