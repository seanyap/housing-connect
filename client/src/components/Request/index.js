import React from 'react';
import './styles.css';

//props will determine if homwowner or tenant
//props - {houseName, userName, status, user (tenant or homeowner), imageURL, tenantForm}
// function Request(props) {
class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      status: '',
    };
  }
  componentDidMount() {
    // if (this.props.display === 'show') {
    fetch(`${process.env.REACT_APP_API_ROUTE}/api/sources/img/1`)
      .then((res) => res.blob())
      .then((imageBlob) => {
        // Then create a local URL for that image and print it
        const imageObjectURL = URL.createObjectURL(imageBlob);
        // console.log(imageObjectURL);
        this.setState({
          imageURL: imageObjectURL,
        });
      });
    // }
  }

  render() {
    // if (this.props.display !== 'hidden') {
    var stat = '';
    if (this.props.user === 'tenant' && this.props.display !== 'hidden') {
      return (
        <div className='request-comp tenant request main'>
          <div>
            <img id='house-pic' src={this.state.imageURL} alt='' />
          </div>
          {/* TODO: replace text with props value */}
          <div className='info'>
            <h2>{this.props.houseName}</h2>
            <p>Price: {this.props.price}</p>
            <p>Bedrooms: {this.props.beds}</p>
            <p>Bathrooms: {this.props.bathrooms}</p>
            <p>
              Request Status: <b>{this.props.status}</b>
            </p>
          </div>
        </div>
      );
    } else if (
      this.props.user === 'homeowner' &&
      this.props.display !== 'hidden'
    ) {
      return (
        <div className='request-comp homeowner request main'>
          <div>
            <img id='house-pic' src={this.state.imageURL} alt='' />
          </div>
          {/* TODO: replace text with props value */}

          <div id='info'>
            <div>
              <h2>{this.props.houseName}</h2>
            </div>
            {/* <a href='{props.tenantForm}'> */}
            {this.props.firstName} {this.props.lastName}
            <div id='both-info'>
              <div id='tenantinfo'>
                <p>Email: {this.props.email}</p>
                <p>Phone Number: {this.props.number}</p>
                <p>Credit Score: {this.props.credit}</p>
                <p>Income: $ {this.props.income}.00/year</p>
              </div>
              <div id='reqInfo'>
                <p>Desired Average Credit Score: {this.props.reqCredit}</p>
                <p>Desired Average Income: $ {this.props.reqIncome}.00/year</p>
              </div>
            </div>
            {/* </a> */}
            <div id='answer' hidden>
              <p></p>
            </div>
            <div className='d-a-button' id='buttons'>
              <button
                id='w3-green'
                value='accept'
                name='statusButton'
                onClick={
                  // this.change('green')
                  (event) => {
                    // console.log(this.props);
                    // console.log(event);
                    // console.log(this.props.listingId);
                    fetch(
                      `${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo/${this.props.listingId}`,
                      {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ statusButton: 'Accepted!' }),
                      }
                    )
                      .then((res) => {
                        return res.json();
                      })
                      .then((listing) => {
                        this.setState({
                          status: listing.status,
                        });
                        console.log(listing);
                      });

                    document.getElementById('w3-green').hidden = true;
                    document.getElementById('w3-red').hidden = true;
                    let doc = document.getElementById('answer');
                    doc.innerHTML = `You have accepted ${this.props.firstName}'s request!`;
                    doc.classList.add('green');
                    stat = 'Accepted!';
                    doc.hidden = false;
                  }
                }
              >
                Accept
              </button>
              <button
                id='w3-red'
                name='statusButton'
                value='deny'
                onClick={(event) => {
                  fetch(
                    `${process.env.REACT_APP_API_ROUTE}/api/tenantsinfo/${this.props.listingId}`,
                    {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ statusButton: 'Denied :(' }),
                    }
                  )
                    .then((res) => {
                      return res.json();
                    })
                    .then((listing) => {
                      this.setState({
                        status: listing.status,
                      });
                      console.log(listing);
                    });
                  document.getElementById('w3-green').hidden = true;
                  document.getElementById('w3-red').hidden = true;
                  let doc = document.getElementById('answer');
                  doc.innerHTML = `You have declined ${this.props.firstName}'s request :(`;
                  doc.classList.add('red');
                  stat = 'Declined :(';
                  doc.hidden = false;
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.props.user === 'tenant') {
      return (
        <div>
          <h2>You have not made any requests yet!</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>You have no requests yet</h2>
        </div>
      );
    }
  }
}

export default Request;
