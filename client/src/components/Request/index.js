import React from 'react';
import './styles.css';

//props will determine if homwowner or tenant
//props - {houseName, userName, status, user (tenant or homeowner), imageURL, tenantForm}
// function Request(props) {
class Request extends React.Component {
  state = {
    imageURL: '',
  };
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
    } else if (this.props.display !== 'hidden') {
      return (
        <div className='request-comp homeowner request main'>
          <div>
            <img id='house-pic' src={this.state.imageURL} alt='' />
          </div>
          {/* TODO: replace text with props value */}
          <div className='info'>
            <a href='{props.tenantForm}'>
              {this.props.firstName} {this.props.lastName} Info
            </a>
            <div className='d-a-button'>
              <button className='w3-button w3-green'>Accept</button>
              <button className='w3-button w3-red'>Decline</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>You have not made any requests yet!</h2>
        </div>
      );
    }
    // }
  }
}

export default Request;
