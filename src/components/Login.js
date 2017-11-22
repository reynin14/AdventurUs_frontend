import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/users'
import {getUsersTravelSpots} from '../actions/travelspots'
import { Form, Button } from 'semantic-ui-react'


class Login extends React.Component{

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let currentUsername = this.state.username
    let password = this.state.password
    this.props.setUser(currentUsername, password)

  }

  render(){
    return(
      <div>
        <p>Login</p>
        <Form>
          <Form.Input
            type="text"
            placeholder="Username"
            onChange={(event) => this.setState({username: event.target.value})}
          />
        <Form.Input
            type="text"
            placeholder="Password"
            onChange={(event) => this.setState({password: event.target.value})}
          />
        <Button type="submit" onClick={this.handleSubmit}>Login</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, { setUser, getUsersTravelSpots })(Login)
