import React from 'react'
import EventRec from './EventRec'
import { connect } from 'react-redux';
import '../App.css'

class EventRecContainer extends React.Component {

  render(){
    let formattedEventRecs = this.props.eventRecs.map((eventRec) => {

      if (eventRec.travel_spot_id === this.props.id){
        return <EventRec data={eventRec} key={eventRec.id}/>
      }
    })

    return(
      <div className="kevin">
        {formattedEventRecs}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    eventRecs: state.eventReducer.eventRecs
  })
}

export default connect(mapStateToProps)(EventRecContainer)
