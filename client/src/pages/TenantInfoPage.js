import React from 'react';
import NavBar from '../components/NavBar';
import { Redirect } from 'react-router';
// import axios from 'axios';

import '../styles/newlist.css';
class TenantInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      creditScore: '',
      income: '',
      listings: [
        new URLSearchParams(this.props.location.search).get('listingID'),
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo`, {
      // fetch('/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }

        throw new Error('Content validation');
      })
      .then((post) => {
        this.setState({
          success: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  render() {
    // console.log(
    //   new URLSearchParams(this.props.location.search).get('listingID')
    // );
    if (this.state.success) return <Redirect to='/tenant-dash' />;

    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className='alert alert-danger'>
          There was an error saving this post.
        </div>
      );
    }

    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div className='body'>
          <div className='tenant-body'>
            <h1>Please Input Your Infomation</h1>
            <br />
            <div className='contact'>
              {/* <h2>Contact Information</h2> */}

              <form
                className='tenant-info'
                onSubmit={this.handleSubmit}
                // action="http://localhost:3001/"
                // method="post"
              >
                <label htmlFor='firstName'>First Name:</label>

                <input
                  type='text'
                  placeholder='Enter First Name'
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
                <br />
                <label htmlFor='lastName'>Last Name:</label>

                <input
                  type='text'
                  placeholder='Enter Last Name'
                  name='lastName'
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
                <br />
                <label htmlFor='phoneNumber'>Phone Number:</label>
                <input
                  type='number'
                  placeholder='Enter Phone Number'
                  name='phoneNumber'
                  value={this.state.phoneNumber}
                  onChange={this.handleInputChange}
                />
                <br />
                <label htmlFor='email'>Email Address:</label>
                <input
                  type='email'
                  placeholder='Enter Email Address'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />

                <br />
                <label htmlFor='creditScore'>Credit Score:</label>
                <input
                  type='number'
                  placeholder='Enter Credit Score'
                  name='creditScore'
                  value={this.state.creditScore}
                  onChange={this.handleInputChange}
                />
                <br />
                <label htmlFor='income'>Income:</label>
                <input
                  type='number'
                  placeholder='Enter Household Income'
                  name='income'
                  value={this.state.income}
                  onChange={this.handleInputChange}
                />
                <br />
                {/* <label htmlFor='employment'>Proof of Employment:</label> */}
                {/* <input
                  type='file'
                  //   placeholder='Enter Phone Number'

                  name='employment'
                  value={this.state.employment}
                  onChange={this.handleInputChange}
                />
                <br />
                <label htmlFor='id'>Proof of Identification:</label>
                <input
                  type='file'
                  //   placeholder='Enter Phone Number'

                  name='id'
                  value={this.state.id}
                  onChange={this.handleInputChange}
                /> */}
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
