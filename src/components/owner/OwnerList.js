import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }

    componentDidMount(){
        console.log("Owner LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        OwnerManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }

    render(){
        console.log("Owner LIST: Render");

        return(
            <div className="container-cards">
                {this.state.owners.map(owners => <OwnerCard />)}
            </div>
        )
    }
}

export default OwnerList