import React from 'react'
import { Button, Header, Modal, Card, Grid } from 'semantic-ui-react'

const InfoBox = (props) =>{

  const infoStyle = {
    zIndex: 10,
    position: 'absolute',
    borderRadius: '15%',
    border: '3px solid black',
    background: 'white',
    padding: 20,
    margin: 5,
    fontSize: 16
  }

  let eventRecs = props.data.event_recs.map((eventRec) => {
    return (
      <Card key={eventRec.id}>
        <Card.Content>
          <Card.Header>
            {eventRec.name_of_event}
          </Card.Header>
          <Card.Meta>
            Address: {eventRec.address}<br></br>
            Average Price: ${eventRec.average_price}
          </Card.Meta>
          <Card.Description>
            {eventRec.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })

  let foodRecs = props.data.food_recs.map((foodRec) => {
    return (
      <Card key={foodRec.id}>
        <Card.Content>
          <Card.Header>
            {foodRec.restaurant_name}
          </Card.Header>
          <Card.Meta>
            Address: {foodRec.address}<br></br>
            Average Price: ${foodRec.average_price}
          </Card.Meta>
          <Card.Description>
            {foodRec.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })

  let sightRecs = props.data.sight_recs.map((sightRec) => {
    return (
      <Card key={sightRec.id}>
        <Card.Content>
          <Card.Header>
            {sightRec.sight_name}
          </Card.Header>
          <Card.Meta>
            Address: {sightRec.address}<br></br><br></br>
            Free Admission: {sightRec.free_admission ? "Yes" : "No"}
          </Card.Meta>
          <Card.Description>
            {sightRec.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })

  let accommodationRecs = props.data.accommodation_recs.map((accommoRec) => {
    return (
      <Card key={accommoRec.id}>
        <Card.Content>
          <Card.Header>
            {accommoRec.name}
          </Card.Header>
          <Card.Meta>
            Address: {accommoRec.address}<br></br>
            Type: {accommoRec.type_of_accommodation}<br></br>
            Average Price Per Night: {accommoRec.average_price_per_night}
          </Card.Meta>
          <Card.Description>
            {accommoRec.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })


  return(
    <div style={infoStyle}>
      <p>{props.data.city}, {props.data.country}</p>
        <Modal trigger={<Button>See recommendations</Button>}>
          <Modal.Header>{props.data.city}, {props.data.country}</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description>

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header>Event Recommendations</Header>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {eventRecs}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header>Food Recommendations</Header>
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
                  </Grid.Column>
                  <Grid.Column width={12}>
                    {accommodationRecs}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </Modal.Description>
          </Modal.Content>
        </Modal>
    </div>
  )

}

export default InfoBox
