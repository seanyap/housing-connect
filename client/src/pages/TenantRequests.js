import React from 'react';
import Request from '../components/Request';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';
import '../styles/dashboard.css';
import { Link, Redirect } from 'react-router-dom';

class TenantRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      listing: [],
      name: '',
      listingId: '',
      address: '',
      tenantFirst: '',
      tenantLast: '',
      tenantEmail: '',
      tenantNumber: '',
      tenantCredit: '',
      tenantIncome: '',
      reqCredit: '',
      reqIncome: '',
      display: 'hidden',
      status: '', 
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
              display: 'show',
            });
          });
     
      })
 
      .catch((err) => console.log('API ERROR: ', err));
  
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div className='body'>
          <div className='dash-body'>
            <h1 id='top'>{this.state.name} Listings</h1>
            <Link to='/dashboard' className='btn btn-primary home'>
             View your listings!
            </Link>
           
            <Request
              houseName={this.state.address}
             
              user='homeowner'
              display={this.state.display}
              firstName={this.state.tenantFirst}
              lastName={this.state.tenantLast}
              email={this.state.tenantEmail}
              number={this.state.tenantNumber}
              credit={this.state.tenantCredit}
              income={this.state.tenantIncome}
              reqCredit={this.state.reqCredit}
              reqIncome={this.state.reqIncome}
              listingId={this.state.listingId}
              status={this.state.status}
              
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

export default TenantRequests;
