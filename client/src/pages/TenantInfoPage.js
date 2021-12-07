import React from "react";
import NavBar from "../components/NavBar";

import "../styles/tenantinfo.css";

class TenantInfoPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div class="body">
          <div class="tenant-body">
            <h1>Please Input Your Infomation</h1>
            <br />
            <div class="contact">
              {/* <h2>Contact Information</h2> */}
              <form class="tenant-info">
                <label for="fullName">Full Name:</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullName"
                />
                <br />
                <label for="phone">Phone Number:</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phone"
                />
                <br />
                <label for="email">Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                />
                <br />
                <label for="credit">Credit Score:</label>
                <input
                  type="number"
                  placeholder="Enter Credit Score"
                  name="credit"
                />
                <br />
                <label for="income">Income:</label>
                <input
                  type="number"
                  placeholder="Enter Household Income"
                  name="number"
                />
                <br />
                <label for="employment">Proof of Employment:</label>
                <input
                  type="file"
                  //   placeholder='Enter Phone Number'
                  name="employment"
                />
                <br />
                <label for="id">Proof of Identification:</label>
                <input
                  type="file"
                  //   placeholder='Enter Phone Number'
                  name="id"
                />
                <br />
                <input type="submit" value="Submit Information" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TenantInfoPage;
