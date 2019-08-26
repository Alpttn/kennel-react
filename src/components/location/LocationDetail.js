import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
// import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      buildingSite: "",
      notes: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        buildingSite: location.buildingSite,
        notes: location.notes
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Building site: {this.state.buildingSite}</h3>
          <p>{this.state.notes}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;