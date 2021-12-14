import React from 'react';
import Request from '../components/Request';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';
import '../styles/dashboard.css';
import { Link, Redirect } from 'react-router-dom';
// import { TableHints } from 'sequelize/types';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // houseName: '',
      // status: '',
      listing: [],
      listingId: '',
      name: '',
      status: '',
      address: '',
      // status: 'pending',
      tenantFirst: '',
      tenantLast: '',
      tenantEmail: '',
      tenantNumber: '',
      tenantCredit: '',
      tenantIncome: '',
      reqCredit: '',
      reqIncome: '',
      // price: '',
      // beds: '',
      // bathrooms: '',
      display: 'hidden',
      page: 'dash',
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/homeowner`)
      .then((res) => res.json())
      .then((homeowner, listing) => {
        if (homeowner) {
          this.setState({
            listing: homeowner.listing,
            name: `${homeowner.homeowner.firstName}'s`,
            address: homeowner.listing.address,
            reqCredit: homeowner.listing.reqCredit,
            reqIncome: homeowner.listing.reqIncome,
            listingId: homeowner.listing.id,
            status: homeowner.listing.status,
            display: 'show',

            // price: `$${homeowner.listing.rent}.00`,
            // beds: tenant.listing.bedrooms,
            // bathrooms: tenant.listing.bathrooms,
          });
        }
        fetch(
          `${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo/${homeowner.listing.id}`
        )
          .then((res) => res.json())
          .then((tenant) => {
            this.setState({
              tenantFirst: tenant.tenant.firstName,
              tenantLast: tenant.tenant.lastName,
              tenantEmail: tenant.tenant.email,
              tenantNumber: tenant.tenant.phoneNumber,
              tenantCredit: tenant.tenant.creditScore,
              tenantIncome: tenant.tenant.income,
              // display: 'show',
            });
          });
        // console.log(tenant.tenant);
        // console.log(tenant.listing);
      })
      // .then((homeowner, listing) => {
      //   fetch(
      //     `${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo/${homeowner.listing.id}`
      //   ).then((res) => res.json());
      // })
      .catch((err) => console.log('API ERROR: ', err));
    // }
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div className='body'>
          <div className='dash-body'>
            <h1 id='top'>{this.state.name} Listings</h1>
            <Link to='/tenantrequests' className='btn btn-primary ten'>
              View your visit requests!
            </Link>
            <Posts
              {...this.state.listing}
              display={this.state.display}
              page={this.state.page}
            />

            <Link to='/new-listing' className='btn btn-primary home'>
              Create a New Listing
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
