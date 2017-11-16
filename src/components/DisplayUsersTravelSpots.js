import React from 'react';
import { connect } from 'react-redux'
import { getUsersTravelSpots } from '../actions/travelspots'
import { Button, Grid } from 'semantic-ui-react'
import TravelSpot from './TravelSpot'

class DisplayUsersTravelSpots extends React.Component{

  grabUsersTravelSpots = () => {
    let userTravelSpots = this.props.usersTravelSpots

    let mappedTravelSpots = userTravelSpots.map((travelspot, index) => {
      return (
        <TravelSpot data={travelspot} key={travelspot.id} id={travelspot.id}/>
      )
    })

    return mappedTravelSpots
  }


  render(){
    const travelSpots = this.grabUsersTravelSpots()

    return(
      <div>
        <h1>My Adventures</h1><br></br>
        {travelSpots}
      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return ({
    usersTravelSpots: state.travelSpotReducer.usersTravelSpots,
    loadedUsersSpots: state.travelSpotReducer.loadedUsersSpots
  })
}

export default connect(mapStateToProps, { getUsersTravelSpots })(DisplayUsersTravelSpots)

// { this.props.loadedUsersSpots ? this.grabUsersTravelSpots() : null }
