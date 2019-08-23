import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employee: <span className="card-petname">Archie</span></h3>
          <p>Title: Manager</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;