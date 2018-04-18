import React, {Component} from 'react';
import {geolocated} from 'react-geolocated';
import Shortinfo from '../../components/Shortinfo/Shortinfo';
class Location extends Component {
    state = {
      coords : {
        lat : null,
        lon : null
      }
      
    }

    navigationHandler= (lati, longi) => {
      this.setState({
        coords : {
          lat : lati,
          lon : longi
        }
        
      });
    }

    componentDidUpdate = () => {
      if((!this.state.coords.lat || !this.state.coords.lon) && this.props.coords)
      {this.navigationHandler(this.props.coords.latitude, this.props.coords.longitude)}
    }
    render() {
      return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords && this.state.coords.lat && this.state.coords.lon
            ? 
            <div>
            <div><Shortinfo coordinates = {this.state.coords}/></div>
            </div>
            : <div>Getting the location data&hellip; </div>;
    }
  }

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
  })(Location);