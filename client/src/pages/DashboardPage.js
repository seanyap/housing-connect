import React from "react";
// import NavBar from '../components/NavBar';
import Request from "../components/Request";

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div class="body">
          <h2>Your Listings</h2>
          {/* I think we need each listing to have a unique id so that we can connect it through the pages */}
          {/* here put pic of house and to the right put request component */}
          {/* <p>Picture of the house listing</p> */}
          {/* based on the props for the Request component will return tenant or homeowner Request */}
          <Request houseName="House 1" user="tenant" status="accepted" />
        </div>
      </div>
    );
  }
}

export default DashboardPage;
