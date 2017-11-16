import React from 'react'
import { Button, Grid, Card, Modal, Header, Popup } from 'semantic-ui-react'
import AccommodationRecsForm from './AccommodationRecsForm'
import EventRecsForm from './EventRecsForm'
import FoodRecsForm from './FoodRecsForm'
import SightRecsForm from './SightRecsForm'
import EventRec from './EventRec'
import { connect } from 'react-redux';
import { loadCurrentTravelSpotEventRecs } from '../actions/eventRecs'
import { deleteTravelSpot } from '../actions/travelspots'
import EventRecContainer from './EventRecContainer'
import '../App.css'


class TravelSpot extends React.Component{

  handleDelete = () => {
    this.props.deleteTravelSpot(this.props.id)
  }

  componentWillMount(){
    this.props.loadCurrentTravelSpotEventRecs(this.props.data.event_recs)
  }

  render(){

    let currentTravelSpotId = this.props.id



    // const myBigGreenDialog = {
    //   backgroundColor: 'black',
    //   color: '#ffffff',
    //   width: '70%',
    //   height: '400px',
    //   marginTop: '-300px',
    //   marginLeft: '-35%',
    // };

    // <div key={event_rec.id}>
    //   <Card>
    //     <Card.Content>
    //       <Card.Header>
    //         {event_rec.name_of_event}
    //       </Card.Header>
    //       <Card.Meta>
    //         Address: {event_rec.address}<br></br>
    //         Average Price: ${event_rec.average_price}
    //       </Card.Meta>
    //       <Card.Description>
    //         <div>
    //           {event_rec.description}
    //         </div>
    //         <div>
    //           <Button compact color='blue' size='mini'>Edit</Button>
    //           <Button compact color='red' size='mini'>Delete</Button>
    //         </div>
    //       </Card.Description>
    //     </Card.Content>
    //   </Card>
    // </div>

    let eventRecs = this.props.data.event_recs.map((event_rec) => {
      return <EventRec data={event_rec}/>
    })

    let foodRecs = this.props.data.food_recs.map((food_rec) => {
      return <div key={food_rec.id}>
        <Card>
          <Card.Content>
            <Card.Header>
              {food_rec.restaurant_name}
            </Card.Header>
            <Card.Meta>
              Address: {food_rec.address}<br></br>
              Average Price: ${food_rec.average_price}
            </Card.Meta>
            <Card.Description>
              <div>
                {food_rec.description}
              </div>
              <div>
                <Button compact color='blue' size='mini'>Edit</Button>
                <Button compact color='red' size='mini'>Delete</Button>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    })

    let sightRecs = this.props.data.sight_recs.map((sight_rec) => {
      return <div key={sight_rec.id}>
        <Card>
          <Card.Content>
            <Card.Header>
              {sight_rec.sight_name}
            </Card.Header>
            <Card.Meta>
              Address: {sight_rec.address}<br></br>
              Free Admission: {sight_rec.free_admission ? "Yes" : "No"}
            </Card.Meta>
            <Card.Description>
              <div>
                {sight_rec.description}
              </div>
              <div>
                <Button compact color='blue' size='mini'>Edit</Button>
                <Button compact color='red' size='mini'>Delete</Button>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    })

    let accommodationRecs = this.props.data.accommodation_recs.map((accommodation_rec) => {
      return <div key={accommodation_rec.id}>
        <Card>
          <Card.Content>
            <Card.Header>
              {accommodation_rec.name}
            </Card.Header>
            <Card.Meta>
              Address: {accommodation_rec.address}<br></br>
              Type: {accommodation_rec.type_of_accommodation}<br></br>
              Average Price Per Night: ${accommodation_rec.average_price_per_night}
            </Card.Meta>
            <Card.Description>
              <div>
                {accommodation_rec.description}
              </div>
              <div>
                <Button compact color='blue' size='mini'>Edit</Button>
                <Button compact color='red' size='mini'>Delete</Button>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    })


    return(
      <div>
        <section>
          <h1>{this.props.data.city}</h1>
        </section>
        <Modal trigger={<Button compact>Edit Recommendations</Button>}>
          <Modal.Header>
            <h1>{this.props.data.city}</h1>{this.props.data.country}, {this.props.data.continent}
          </Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header>Event Recommendations</Header>
                      <Popup
                        trigger={<Button compact>Add New Recommendation</Button>}
                        content={<EventRecsForm travelSpotId={currentTravelSpotId}/>}
                        on='click'
                        hideOnScroll
                      />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {this.props.eventRecsLoaded ? <EventRecContainer id={this.props.id}/> : null}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header>Food Recommendations</Header>
                      <Popup
                        trigger={<Button compact>Add New Recommendation</Button>}
                        content={<FoodRecsForm />}
                        on='click'
                        hideOnScroll
                      />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {foodRecs}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header>Sight Recommendations</Header>
                      <Popup
                        trigger={<Button compact>Add New Recommendation</Button>}
                        content={<SightRecsForm />}
                        on='click'
                        hideOnScroll
                      />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {sightRecs}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header>Accommodation Recommendations</Header>
                      <Popup
                        trigger={<Button compact>Add New Recommendation</Button>}
                        content={<AccommodationRecsForm />}
                        on='click'
                        hideOnScroll
                      />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {accommodationRecs}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </Modal.Description>
          </Modal.Content>
          <Button onClick={this.handleDelete} color='red' size='small' floated='right'>Delete this Adventure</Button>
        </Modal>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return ({
    eventRecsLoaded: state.eventReducer.eventRecsLoaded,
    loadedEventRecs: state.eventReducer.eventRecs
  })
}

export default connect(mapStateToProps, { loadCurrentTravelSpotEventRecs, deleteTravelSpot })(TravelSpot)

// <Grid celled>
//   <Grid.Row>
//     <Grid.Column>
//       <Header>Event Recommendations</Header>
//     </Grid.Column>
//     <Grid.Column>
//       {eventRecs}
//     </Grid.Column>
//   </Grid.Row>
//
//   <Grid.Row>
//     <Header>Food Recommendations  </Header><br></br>
//     {foodRecs}
//   </Grid.Row>
//   <Grid.Row>
//     <Header>Sight Recommendations  </Header><br></br>
//     {sightRecs}
//   </Grid.Row>
// </Grid>

// <h3>City: {this.props.data.city}</h3>
// <h3>Country: {this.props.data.country}</h3>
// <h3>Continent: {this.props.data.continent}</h3>

// <section>
//   <h3>City: {this.props.data.city}</h3>
//   <Button onClick={() => this.animated.show()}>See Recommendations</Button>
// </section>
// <SkyLight
//   dialogStyles={myBigGreenDialog}
//   hideOnOverlayClicked
//   ref={ref => this.animated = ref}
//   transitionDuration={200}
// >
//   <Grid textAlign='center'>
//     <Grid.Row>
//       <h1>{this.props.data.city}</h1><br></br>
//       <h3 align='center'>{this.props.data.country}, {this.props.data.continent}</h3>
//     </Grid.Row>
//     <Grid.Row>
//       <Grid.Column>
//         <h2>Event Recommendations</h2>
//         {event_recs}
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row>
//       <Grid.Column>
//         <h2>Food Recommendations</h2>
//         {food_recs}
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
//
//
// </SkyLight>
