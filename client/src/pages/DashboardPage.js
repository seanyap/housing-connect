import React from "react";
// import NavBar from '../components/NavBar';
import Request from "../components/Request";
import NavBar from "../components/NavBar";

import "../styles/dashboard.css";

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div class="body">
          {/* I think we need each listing to have a unique id so that we can connect it through the pages */}
          {/* here put pic of house and to the right put request component */}
          {/* <p>Picture of the house listing</p> */}
          {/* based on the props for the Request component will return tenant or homeowner Request */}
          <div class="dash-body">
            <h1 id="top">Your Listings</h1>
            <Request houseName="House 1" user="tenant" status="accepted" />
            <Request houseName="House 2" user="tenant" status="pending" />
            <Request houseName="House 3" user="homeowner" />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
