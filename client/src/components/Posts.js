import React from 'react';
import { Link } from 'react-router-dom';
class Posts extends React.Component {
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
    // }
  }
  render() {
    return (
      <div className='request-comp tenant request main'>
        <div id = 'img-house'>
          <img id='house-pic' src={this.state.imageURL} alt='' />
        </div>
        {/* TODO: replace text with props value */}
        <div className='info'>
          <h2>{this.props.address}</h2>
          <p>Bedrooms: {this.props.bedrooms}</p>
          <p>Bathrooms: {this.props.bathrooms}</p>
          <p>Rent Price: {this.props.price}</p>
          <p>Required Income: {this.props.reqIncome}</p>
          <p>Required Credit Score: {this.props.reqCredit}</p>
          
      </div>
        
          
      
      </div>

  );
}
}
export default Posts;