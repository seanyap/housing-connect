import React from 'react';
import Request from '../components/Request';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';
import '../styles/dashboard.css';
import { Link, Redirect } from 'react-router-dom';

class DashboardPage extends React.Component {
  state = {
    listings: [],
  };
  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/listings`)
      .then((res) => res.json())
      .then((listings) => {
        this.setState({
          listings: listings.map((listing, index) => (
            <Posts {...listing} key={index} />
          )),
        });
      })
      .catch((err) => console.log('API ERROR: ', err));
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div className='body'>
          {/* I think we need each listing to have a unique id so that we can connect it through the pages */}
          {/* here put pic of house and to the right put request component */}
          {/* <p>Picture of the house listing</p> */}
          {/* based on the props for the Request component will return tenant or homeowner Request */}
          <div className='dash-body'>
            <h1 id='top'>Your Listings</h1>
            {/* <Request houseName="House 1" user="tenant" status="accepted" />
            <Request houseName="House 2" user="tenant" status="pending" />
            <Request houseName="House 3" user="homeowner" /> */}
            {this.state.listings}
            <Link to='/new-listing' className='btn btn-primary'>
              Create a New Listing
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
