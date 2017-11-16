import React from 'react';
import { connect } from 'react-redux'
import { Form, Button, Select, Radio } from 'semantic-ui-react'
import { addEventRec, updateEventRec } from '../actions/eventRecs'

class EventRecsUpdateForm extends React.Component{

  state = {
    nameOfEvent: this.props.data.name_of_event,
    address: this.props.data.address,
    averagePrice: this.props.data.average_price,
    descriptionOfEvent: this.props.data.description,
    eventRecId: this.props.data.id
  }

  handleUpdate = (event) => {
    event.preventDefault()

    let payload = {
      nameOfEvent: this.state.nameOfEvent,
      address: this.state.address,
      averagePrice: this.state.averagePrice,
      descriptionOfEvent: this.state.descriptionOfEvent,
      userId: parseInt(localStorage.getItem('id'), 10),
      currentTravelSpotId: parseInt(this.props.data.travel_spot_id, 10)
    }

    let id = this.state.eventRecId

    this.props.updateEventRec(payload, id)
  }



  render(){

    return (
      <div>
        <h3>List an Event Recommendation</h3>
        <div>
          <Form>
            <Form.Input
              type="text"
              onChange={(event) => this.setState({nameOfEvent: event.target.value})}
              value={this.state.nameOfEvent}
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({address: event.target.value})}
              value={this.state.address}
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({averagePrice: event.target.value})}
              value={this.state.averagePrice}
            />

            <Form.TextArea
              type="text"
              onChange={(event) => this.setState({descriptionOfEvent: event.target.value})}
              value={this.state.descriptionOfEvent}
            />


          <Button type="submit" onClick={this.handleUpdate}>Update</Button>
          </Form>
        </div>

      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return ({
//     travelSpots: state.travelSpots
//   })
// }

export default connect(null, { addEventRec, updateEventRec })(EventRecsUpdateForm)
