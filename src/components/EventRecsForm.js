import React from 'react';
import { connect } from 'react-redux'
import { Form, Button, Select, Radio } from 'semantic-ui-react'
import { addEventRec } from '../actions/eventRecs'

class EventRecsForm extends React.Component{

  state = {
    nameOfEvent: "",
    address: "",
    averagePrice: "",
    descriptionOfEvent: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let payload = {
      nameOfEvent: this.state.nameOfEvent,
      address: this.state.address,
      averagePrice: this.state.averagePrice,
      descriptionOfEvent: this.state.descriptionOfEvent,
      userId: parseInt(localStorage.getItem('id'), 10),
      currentTravelSpotId: parseInt(this.props.travelSpotId, 10)
    }

    this.props.addEventRec(payload)
  }


  render(){
    const { value } = this.state

    return (
      <div>
        <h3>List an Event Recommendation</h3>
        <div>
          <Form>
            <Form.Input
              type="text"
              onChange={(event) => this.setState({nameOfEvent: event.target.value})}
              placeholder="Name of Event"
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({address: event.target.value})}
              placeholder="Address of Event"
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({averagePrice: event.target.value})}
              placeholder="Average Price"
            />

            <Form.TextArea
              type="text"
              onChange={(event) => this.setState({descriptionOfEvent: event.target.value})}
              placeholder="Brief Description"
            />


          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
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

export default connect(null, { addEventRec })(EventRecsForm)
