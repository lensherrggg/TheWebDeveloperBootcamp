import React, { Component } from 'react';
import { Map, InfoWindow, Marker, Circle, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '85%',
      height: '50vh'
    }
    return (
      <Map 
        google={this.props.google}
        style={style}
        initialCenter={this.props.location}
        zoom={14}
        name={'current location'}
      >
      <Marker
        position={this.props.location} 
      />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAfT-3p9rfij7xOWVFawL-fP7ofkDahH4I"
})(MapContainer);