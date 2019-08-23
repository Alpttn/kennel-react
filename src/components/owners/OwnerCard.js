import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner: <span className="card-petname">Cersi</span></h3>
          <p>Dog Name: Hound</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;