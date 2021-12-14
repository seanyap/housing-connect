import React, { Component } from "react";
import NavBar from "../components/NavBar";
import SideMap from "../components/SideMap";
import ListItem from "../components/ListItem";
import { Link, Redirect } from "react-router-dom";
import "../styles/result.css";
import Posts from "../components/Posts";
export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocation: "",
      listings: [],
    };
  }

  componentDidMount() {
    const location = new URLSearchParams(this.props.location.search)
      .get("location")
      .toLowerCase();
    this.setState({
      searchLocation: location,
    });

    fetch(`${process.env.REACT_APP_API_ROUTE}/api/listings/${location}`)
      .then((res) => res.json())
      .then((listings) => {
        this.setState({
          listings: listings.map((listing, i) => (
            <div>
              <Posts {...listing} key={i} isResultPage={true} />
              {/* <Link
                to={`/tenant-info?listingID=${listing.id}`}
                className="btn btn-primary home"
              >
                Schedule a Visit
              </Link> */}
            </div>
          )),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
  }

  render() {
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
                  {this.state.searchLocation}
                </span>
              </h2>
            </div>
            <div id="result-posts">
              {this.state.listings}
              {/* <Link to='/tenant-info' className='btn btn-primary'>
                Schedule a Visit
              </Link> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
