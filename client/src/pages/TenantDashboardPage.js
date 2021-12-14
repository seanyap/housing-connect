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
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo`)
      .then((res) => res.json())
      .then((tenant, listing) => {
        // console.log(tenant.tenant);
        // console.log(tenant.listing);
        this.setState({
          name: tenant.tenant.firstName,
          address: tenant.listing.address,
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
            <h1 id='top'>{this.state.name}'s Requests</h1>

            <Request
              houseName={this.state.address}
              status='pending'
              user='tenant'
            />
            <Link to='/' className='btn btn-primary home'>
              Home Page
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TenantDashboardPage;
