import React, { Component } from 'react';
class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Building site: {this.props.location.buildingSite}</h3>
          <p>{this.props.location.notes}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;