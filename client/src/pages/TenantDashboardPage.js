import React from 'react';
import Request from '../components/Request';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';
import '../styles/dashboard.css';
import { Link, Redirect } from 'react-router-dom';

class TenantDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // houseName: '',
      // status: '',
      name: '',
      address: '',
      price: '',
      beds: '',
      bathrooms: '',
      display: 'hidden',
    };
  }

  componentDidMount() {
    // if (this.state.display !== 'hidden') {
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo`)
      .then((res) => res.json())
      .then((tenant, listing) => {
        if (tenant) {
          this.setState({
            name: `${tenant.tenant.firstName}'s`,
            address: tenant.listing.address,
            price: `$${tenant.listing.rent}.00`,
            beds: tenant.listing.bedrooms,
            bathrooms: tenant.listing.bathrooms,
            display: 'show',
          });
        }
        // console.log(tenant.tenant);
        // console.log(tenant.listing);
      })
      .catch((err) => console.log('API ERROR: ', err));
    // }
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
            <h1 id='top'>{this.state.name} Requests</h1>

            <Request
              houseName={this.state.address}
              status='pending'
              user='tenant'
              display={this.state.display}
              price={this.state.price}
              beds={this.state.beds}
              bathrooms={this.state.bathrooms}
            />

            <Link to='/' className='btn btn-primary home'>
              Search for New Listings
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TenantDashboardPage;
