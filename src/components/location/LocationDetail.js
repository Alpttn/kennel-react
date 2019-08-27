import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
// import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      buildingSite: "",
      notes: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        buildingSite: location.buildingSite,
        notes: location.notes,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Building site: {this.state.buildingSite}</h3>
          <p>Notes: {this.state.notes}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;