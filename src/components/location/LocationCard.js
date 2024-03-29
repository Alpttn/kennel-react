import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Building site: {this.props.location.buildingSite}</h3>
          <p>{this.props.location.notes}</p>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.location.id}/edit`) }}>Edit</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;