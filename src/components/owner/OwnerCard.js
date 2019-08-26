import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner Name: <span className="card-petname">{this.props.owner.name}</span></h3>
          <p>{this.props.owner.Id}</p>
          <p>{this.props.owner.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;