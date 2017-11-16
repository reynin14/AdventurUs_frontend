import React from 'react'
import { Button, Card, Popup } from 'semantic-ui-react'
import '../App.css'
import { connect } from 'react-redux';
import { deleteEventRec } from '../actions/eventRecs'
import EventRecsUpdateForm from './EventRecsUpdateForm'



class EventRec extends React.Component{

  state = {
    nameOfEvent: "",
    address: "",
    averagePrice: "",
    descriptionOfEvent: ""
  }

  handleDelete = () => {
    this.props.deleteEventRec(this.props.data.id)
  }


  render(){
    return(
      <div key={this.props.data.id}>
        <Card className="kevin-card">
          <Card.Content>
            <Card.Header>
              {this.props.data.name_of_event}
            </Card.Header>
            <Card.Meta>
              Address: {this.props.data.address}<br></br>
              Average Price: ${this.props.data.average_price}
            </Card.Meta>
            <Card.Description>
              <div>
                {this.props.data.description}
              </div>
              <div>
                <Popup
                  trigger={<Button compact color='blue' size='mini'>Edit</Button>}
                  content={<EventRecsUpdateForm data={this.props.data}/>}
                  on='click'
                  hideOnScroll
                />
                <Button onClick={this.handleDelete} compact color='red' size='mini'>Delete</Button>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default connect(null, { deleteEventRec })(EventRec)
