import React from "react";

function ListItem(props) {
  return (
    <div>
      <img src="" alt="" />
      {/* TODO: replace text with props value */}
      <div id="desc">
        <h2>Rent Amount</h2>
        <h3>{props.name}</h3>
        <p>Address</p>
      </div>
    </div>
  );
}

export default ListItem;
