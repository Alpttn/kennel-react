import React, { Component } from 'react';
class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Building site: {this.props.location.buildingSite}</h3>
          <p>{this.props.location.notes}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;