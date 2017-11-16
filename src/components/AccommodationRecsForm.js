import React from 'react';
import { connect } from 'react-redux'
import { Form, Button, Select } from 'semantic-ui-react'
import { addAccommodationRec } from '../actions/travelspots'

class AccommodationRecsForm extends React.Component{

  state = {
    name: "",
    typeOfAccommodation: "",
    averagePricePerNight: "",
    address: "",
    descriptionOfAccommodation: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let payload = {
      name: this.state.name,
      typeOfAccommodation: this.state.typeOfAccommodation,
      averagePricePerNight: this.state.averagePricePerNight,
      userId: parseInt(localStorage.getItem('id'), 10)
    }

    this.props.addAccommodationRec(payload)
  }

  render(){

    const options = [
      {key: 'hotel', text: 'Hotel', value: 'hotel'},
      {key: 'motel', text: 'Motel', value: 'motel'},
      {key: 'hostel', text: 'Hostel', value: 'hostel'},
      {key: 'other', text: 'Other', value: 'other'}
    ]

    return (
      <div>
        <h3>List an Accomodation Recommendation</h3>
        <div>
          <Form>
            <Form.Input
              type="text"
              onChange={(event) => this.setState({name: event.target.value})}
              placeholder="Name of Accommodation"
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({address: event.target.value})}
              placeholder="Address of Accommodation"
            />

            <Form.Field control={Select} options={options} placeholder='Type of Accommodation' onChange={(event) => this.setState({typeOfAccommodation: event.target.innerText})} />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({averagePricePerNight: event.target.value})}
              placeholder="Average Price Per Night"
            />

            <Form.TextArea
              type="text"
              onChange={(event) => this.setState({descriptionOfAccommodation: event.target.value})}
              placeholder="Brief Description"
            />

          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    travelSpots: state.travelSpots
  })
}

export default connect(mapStateToProps, { addAccommodationRec })(AccommodationRecsForm)
