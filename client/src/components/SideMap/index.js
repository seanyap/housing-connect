import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

// import "./styles.css";

const mapStyles = {
  width: "50%",
  height: "100%",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 40.586151,
          lng: -73.951595,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"3 Bedroom "} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
}))(MapContainer);
