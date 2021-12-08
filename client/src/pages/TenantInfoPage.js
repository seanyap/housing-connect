import React from 'react';
import NavBar from '../components/NavBar';

import '../styles/tenantinfo.css';


class TenantInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phone: '',
      email: '',
      credit: '',
      income: '',
      employment: '',
      id: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
     event.preventDefault();
    fetch('/api/Listings', {
 
    })
    .then(res => res.json()).then(data => console.log(data))
      }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div class='body'>
          <div class='tenant-body'>
            <h1>Please Input Your Infomation</h1>
            <br />
            <div class='contact'>
              {/* <h2>Contact Information</h2> */}

              <form class="tenant-info" onSubmit={this.handleSubmit}
            // action="http://localhost:3001/"
            // method="post"
          >
                <label for="fullName">Full Name:</label>

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullName"

                  value={this.state.fullName}
                onChange={this.handleInputChange}
                />
                <br />
                <label for="phone">Phone Number:</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={this.state.phone}
                onChange={this.handleInputChange}
                />
                {/* <br /> */}
                {/* <label for="email">Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"

                /> */}
                  value={this.state.email}
                onChange={this.handleInputChange}
                />

                <br />
                <label for='credit'>Credit Score:</label>
                <input

                  type="number"
                  placeholder="Enter Credit Score"
                  name="credit"
                  value={this.state.credit}
                onChange={this.handleInputChange}

                />
                <br />
                <label for='income'>Income:</label>
                <input

                  type="number"
                  placeholder="Enter Household Income"
                  name="income"
                  value={this.state.income}
                onChange={this.handleInputChange}

                />
                <br />
                <label for='employment'>Proof of Employment:</label>
                <input
                  type='file'
                  //   placeholder='Enter Phone Number'

                  name="employment"
                  value={this.state.employment}
                onChange={this.handleInputChange}

                />
                <br />
                <label for='id'>Proof of Identification:</label>
                <input
                  type='file'
                  //   placeholder='Enter Phone Number'

                  name="id"
                  value={this.state.id}
                onChange={this.handleInputChange}

                />
                <br />
                <input type='submit' value='Submit Information' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TenantInfoPage;
