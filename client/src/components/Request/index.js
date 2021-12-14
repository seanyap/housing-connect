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
  }
  render() {
    if (this.props.user === 'tenant') {
      return (
        <div className='request-comp tenant request main'>
          <div>
            <img id='house-pic' src={this.state.imageURL} alt='' />
          </div>
          {/* TODO: replace text with props value */}
          <div className='info'>
            <h2>{this.props.houseName}</h2>
            <p>Request Status: {this.props.status}</p>
          </div>
        </div>
      );
    } else {
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
    }
  }
}

export default Request;
