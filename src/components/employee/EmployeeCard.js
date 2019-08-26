import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employee: <span className="card-petname">{this.props.employee.name}</span></h3>
          <p>{this.props.employee.title}</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;