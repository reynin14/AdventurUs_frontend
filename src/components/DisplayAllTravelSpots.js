import React from 'react'
import { connect } from 'react-redux'
import { getAllTravelSpots } from '../actions/travelspots'
import { Grid } from 'semantic-ui-react'

class DisplayAllTravelSpots extends React.Component {

  allUsersTravelSpots = () => {
    let travelSpots = this.props.allTravelSpots

    let mappedAllTravelSpots = travelSpots.map((travelspot) => {
      return (
        <li key={travelspot.id}>{travelspot.city}</li>
      )
    })

    return mappedAllTravelSpots
  }

  componentDidMount() {
    this.props.getAllTravelSpots()
  }

  render(){

    return(
      <div>
        <ul>
          { this.props.loadedSpots ? this.allUsersTravelSpots() : null}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    allTravelSpots: state.travelSpotReducer.allTravelSpots,
    loadedSpots: state.travelSpotReducer.loadedSpots
  })
}

export default connect(mapStateToProps, { getAllTravelSpots })(DisplayAllTravelSpots)
