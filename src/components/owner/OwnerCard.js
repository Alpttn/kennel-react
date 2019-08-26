import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner Name: <span className="card-petname">{this.props.owner.name}</span></h3>
          <p>Employee Id: {this.props.owner.Id}</p>
          <p>Telephone Number: {this.props.owner.phoneNumber}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;