import React from "react";
import { Link } from "react-router-dom";

function Posts({
  address,
  bedrooms,
  bathrooms,
  rent,
  reqIncome,
  reqCredit,
  extrainfo,
  createdAt,
  id,
}) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          {/* <Link to = {"/listings/" +id}> { address}</Link>
            <Link to = {"/listings/" +id}> { bedrooms}</Link>
            <Link to = {"/listings/" +id}> { bathrooms}</Link>
            <Link to = {"/listings/" +id}> { rent}</Link>
            <Link to = {"/listings/" +id}> { reqIncome}</Link>
            <Link to = {"/listings/" +id}> { reqCredit}</Link>
            <Link to = {"/listings/" +id}> { extrainfo}</Link> */}
        </div>
        <div className="card-footer small text-muted text-right">
          {/* { createdAt } */}
          {/* <Link to = {"/listings/" +id}> Address:{ address}</Link>
            <Link to = {"/listings/" +id}> Bedrooms:{ bedrooms}</Link>
            <Link to = {"/listings/" +id}> { bathrooms}</Link>
            <Link to = {"/listings/" +id}> { rent}</Link>
            <Link to = {"/listings/" +id}> { reqIncome}</Link>
            <Link to = {"/listings/" +id}> { reqCredit}</Link>
            <Link to = {"/listings/" +id}> { extrainfo}</Link> */}
          Address: {address}
          <p></p>
          Bedrooms: {bedrooms}
          <p></p>
          Bathrooms: {bathrooms}
          <p></p>
          Rent Price: {rent}
          <p></p>
          Required Income: {reqIncome}
          <p></p>
          Required Credit Score: {reqCredit}
        </div>
      </div>
    </div>
  );
}
export default Posts;
