import React from 'react';
import TravelSpot from './TravelSpot'
import { connect } from 'react-redux'
import { addTravelSpot, getAllTravelSpots } from '../actions/travelspots'
import { Form, Button } from 'semantic-ui-react'


class ListTravelSpotForm extends React.Component{

  state = {
    city: "",
    country: "",
    continent: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let payload = {
      city: this.state.city,
      country: this.state.country,
      continent: this.state.continent,
      userId: parseInt(localStorage.getItem('id'), 10)
    }

    this.props.addTravelSpot(payload)

    this.setState({
      city: "",
      country: "",
      continent: ""
    })

  }

  render(){
    const travelSpotsList = this.props.usersTravelSpots || [].map((travelSpot, index) => {
      return <TravelSpot key={index} data={travelSpot} />
    })

    return (
      <div>
        <h3>Recently traveled? Add a new place!</h3>
        <Form>
          <Form.Input
            type="text"
            onChange={(event) => this.setState({city: event.target.value})}
            placeholder="City/State"
            value={this.state.city}
          />
          <Form.Input
            type="text"
            onChange={(event) => this.setState({country: event.target.value})}
            placeholder="Country"
            value={this.state.country}
          />
          <Form.Input
            type="text"
            onChange={(event) => this.setState({continent: event.target.value})}
            placeholder="Continent"
            value={this.state.continent}
          />
        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        </Form>
        {travelSpotsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    travelSpots: state.travelSpotReducer.usersTravelSpots
  })

}

export default connect(mapStateToProps, { addTravelSpot, getAllTravelSpots } )(ListTravelSpotForm)
