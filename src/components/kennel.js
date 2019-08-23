import React, { Component } from 'react'
import AnimalCard from './animal/AnimalCard.js'
import EmployeeCard from './employees/EmployeeCard.js'
import LocationCard from './locations/LocationCard.js'
import OwnerCard from './owners/OwnerCard.js'
import './kennel.css'

class Kennel extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Student Kennels<br />
                        <small>Loving care when you're not there.</small>
                    </h2>
                    <address>
                        Visit Us at the Nashville North Location
                        <br />500 Puppy Way
                    </address>
                </div>
                <div>
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </div>
                <div>
                    <OwnerCard />
                </div>
                <div>
                    <EmployeeCard />
                </div>
                <div>
                    <LocationCard />
                </div>
                
            </div>
        );
    }
}

export default Kennel;