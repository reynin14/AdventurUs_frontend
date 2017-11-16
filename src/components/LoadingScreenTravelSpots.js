import React from 'react'
import { Transition, Image } from 'semantic-ui-react'
import travelspotsLoadingAnimation from '../images/traveling_loading_screen.gif'
import airportWalk from '../images/airportWalk.gif'
import { connect } from 'react-redux';

class LoadingScreenTravelSpots extends React.Component{

  render(){
    return(

      <Transition.Group animation={'scale'} duration={1500} content={this.props.loadingUsersSpots ? 'Unmount' : 'Mount'}>

        {this.props.loadingUsersSpots && <Image src={airportWalk} style={
              {
                height: '110%', width: '100%',
                background: '#333',
                position: 'absolute',
                top: 0,
                left: 0
              }
            }
         />}

      </Transition.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    loadingUsersSpots: state.travelSpotReducer.loadingUsersSpots
  })
}

export default connect(mapStateToProps)(LoadingScreenTravelSpots)
