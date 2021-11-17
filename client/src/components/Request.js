import React from 'react';
import './../styles/Request.css';

//props will determine if homwowner or tenant
//props - {houseName, userName, status, user (tenant or homeowner), imageURL, tenantForm}
function Request(props) {
  //this is if they are a tenant
  if (props.user === 'tenant') {
    return (
      <div class='request-comp tenant request main'>
        {/* <img src='{props.imageURL}' alt='' /> */}
        <p>Image of House</p>
        <div class='info'>
          <p>{props.houseName}</p>
          <p>Request Status: {props.status}</p>
        </div>
      </div>
    );
  }
  //this is if they are a homeowner
  else {
    return (
      <div class='request-comp homeowner request main'>
        <p>Image of House</p>
        {/* <img src='{props.imageURL}' alt='' /> */}

        <a href={props.tenantForm}>{props.userName} Info</a>
        <div class='d-a-button'>
          <button class='w3-button w3-green'>Accept</button>
          <button class='w3-button w3-red'>Decline</button>
        </div>
      </div>
    );
  }
}

export default Request;
