import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner Name: <span className="card-petname">Cersi</span></h3>
          <p>Owner Id: Hound</p>
          <p>Phone Number: Hound</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;