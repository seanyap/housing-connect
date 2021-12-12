import React from 'react';
import './styles.css';

//props will determine if homwowner or tenant
//props - {houseName, userName, status, user (tenant or homeowner), imageURL, tenantForm}
function Request(props) {
  //this is if they are a tenant
  if (props.user === 'tenant') {
    return (
      <div className='request-comp tenant request main'>
        {/* <img src='{props.imageURL}' alt='' /> */}
        <p>Image of House</p>
        <div className='info'>
          <p>{props.houseName}</p>
          <p>Request Status: {props.status}</p>
        </div>
      </div>
    );
  }
  //this is if they are a homeowner
  else {
    return (
      <div className='request-comp homeowner request main'>
        <p>Image of House</p>
        {/* <img src='{props.imageURL}' alt='' /> */}
        <div className='info'>
          <a href='{props.tenantForm}'>
            {props.firstName} {props.lastName} Jane Doe Info
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

export default Request;
