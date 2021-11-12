import React from 'react';

//props will determine if homwowner or tenant
//props - {houseName, userName, status, user (tenant or homeowner), imageURL, tenantForm}
function Request(props) {
  //this is if they are a tenant
  if (props.user === 'tenant') {
    return (
      <div class='request-comp tenant'>
        <img src='{props.imageURL}' alt='' />
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
      <div class='request-comp homeowner'>
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
