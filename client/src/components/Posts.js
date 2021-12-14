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
    const scheduleBtn = this.props.isResultPage ? (
      <Link
        to={`/tenant-info?listingID=${this.props.id}`}
        className='btn btn-primary home'
      >
        Schedule a Visit
      </Link>
    ) : null;

    if (this.props.display === 'show') {
      return (
        <div className='request-comp tenant request main'>
          <div id='img-house'>
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
    } else if (this.props.page === 'dash') {
      return (
        <div>
          <h2>You have not made any Listings yet!</h2>
        </div>
      );
    } else {
      return (
        <div className='request-comp tenant request main'>
          <div id='img-house'>
            <img id='house-pic' src={this.state.imageURL} alt='' />
          </div>
          {/* TODO: replace text with props value */}
          <div id='info'>
            <div id='desc'>
              <h2>{this.props.address}</h2>
              <p>Bedrooms: {this.props.bedrooms}</p>
              <p>Bathrooms: {this.props.bathrooms}</p>
              <p>Rent Price: {this.props.price}</p>
              <p>Required Income: {this.props.reqIncome}</p>
              <p>Required Credit Score: {this.props.reqCredit}</p>
            </div>

            {scheduleBtn}
          </div>
        </div>
      );
    }
  }
}
export default Posts;
