import React from 'react';
import { connect } from 'react-redux'
import { Form, Button, Select, Radio } from 'semantic-ui-react'

class FoodRecsForm extends React.Component{

  state = {
    restaurantName: "",
    averagePrice: "",
    address: "",
    descriptionOfFoodRec: ""
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //
  //   console.log("restaurantName", this.state.restaurantName)
  //   console.log("averagePrice", this.state.averagePrice);
  //   console.log("address", this.state.address);
  //
  //   let payload = {
  //     restaurantName: this.state.restaurantName,
  //     averagePrice: this.state.averagePrice,
  //     address: this.state.address,
  //     travelSpotId: parseInt(localStorage.getItem('id'), 10)
  //   }
  //
  //   this.props.addAccommodationRec(payload)
  // }

  // handleAdmissionChange = (event, { value }) => {
  //   this.setState({ value, freeAdmission: value })

  // }

  render(){


    return (
      <div>
        <h3>List a Food Recommendation!</h3>
        <div>
          <Form>
            <Form.Input
              type="text"
              onChange={(event) => this.setState({restaurantName: event.target.value})}
              placeholder="Name of Restaurant"
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({address: event.target.value})}
              placeholder="Address of Restaurant"
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({averagePrice: event.target.value})}
              placeholder="Average Price"
            />

            <Form.TextArea
              type="text"
              onChange={(event) => this.setState({descriptionOfFoodRec: event.target.value})}
              placeholder="Brief description of restaurant and must have dishes"
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

export default FoodRecsForm
