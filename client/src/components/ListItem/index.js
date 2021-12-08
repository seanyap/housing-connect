import React from "react";

import "./styles.css";

class ListItem extends React.Component {
  state = {
    imageURL: "",
  };

  componentDidMount() {
    fetch("/api/sources/img/" + this.props.name)
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
    return (
      <div id="post">
        <img id="house-pic" src={this.state.imageURL} alt="" />
        {/* TODO: replace text with props value */}
        <div id="desc">
          <h2>Rent {this.props.rent}</h2>
          <p>{this.props.address}</p>
          <input type="button" value="Schedule" />
        </div>
      </div>
    );
  }
}

export default ListItem;
