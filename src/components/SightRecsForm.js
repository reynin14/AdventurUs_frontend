import React from 'react';
import { connect } from 'react-redux'
import { Form, Button, Select, Radio } from 'semantic-ui-react'

class SightRecsForm extends React.Component{

  state = {
    sightName: "",
    freeAdmission: "",
    address: "",
    descriptionOfSight: ""
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //
  //   console.log("sightName", this.state.sightName)
  //   console.log("freeAdmission", this.state.freeAdmission);
  //   console.log("address", this.state.address);
  //
  //   let payload = {
  //     sightName: this.state.sightName,
  //     freeAdmission: this.state.freeAdmission,
  //     address: this.state.address,
  //     travelSpotId: parseInt(localStorage.getItem('id'), 10)
  //   }
  //
  //   this.props.addAccommodationRec(payload)
  // }

  handleAdmissionChange = (event, { value }) => {
    this.setState({ value, freeAdmission: value })

  }


  render(){
    // console.log('nameOfEvent:', this.state.nameOfEvent);
    // console.log('freeAdmission', this.state.freeAdmission);
    // console.log('averagePrice:', this.state.averagePrice);
    const { value } = this.state

    return (
      <div>
        <h3>List a Sight Recommendation</h3>
        <div>
          <Form>
            <Form.Input
              type="text"
              onChange={(event) => this.setState({sightName: event.target.value})}
              placeholder="Name of Sight"
            />

            <Form.Input
              type="text"
              onChange={(event) => this.setState({address: event.target.value})}
              placeholder="Address of Sight"
            />

            <Form.Group inline>
              <label>Free Admission?</label>
              <Form.Field control={Radio} label='Yes' value='true' checked={value === 'true'} onChange={(this.handleAdmissionChange)} />
              <Form.Field control={Radio} label='No' value='false' checked={value === 'false'} onChange={this.handleAdmissionChange} />
            </Form.Group>

            <Form.TextArea
              type="text"
              onChange={(event) => this.setState({descriptionOfSight: event.target.value})}
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

export default SightRecsForm
