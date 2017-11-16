import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Header, Image, Segment, Message } from 'semantic-ui-react'
import { createUser } from '../actions/users'


class SignUp extends React.Component{

  state = {
    username: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let payload = {
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }

    this.props.createUser(payload)
  }

  render(){
    return(
      <div>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Sign up with us today!
        </Header>
        <div>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                type="text"
                placeholder="Desired Username"
                onChange={(event) => this.setState({username: event.target.value})}
              />
              <Form.Group widths='equal'>
                <Form.Input
                  type="text"
                  placeholder="First name"
                  onChange={(event) => this.setState({first_name: event.target.value})}
                />
                <Form.Input
                  type="text"
                  placeholder="Last Name"
                  onChange={(event) => this.setState({last_name: event.target.value})}
                />
              </Form.Group>
              <Form.Input
                type="password"
                placeholder="Password"
                onChange={(event) => this.setState({password: event.target.value})}
              />
              <Form.Input
                type="password"
                placeholder="Confirm password"
                onChange={(event) => this.setState({password_confirmation: event.target.value})}
              />
              <Button type="submit" onClick={this.handleSubmit} fluid size='large' color='teal'>Make My Account</Button>
            </Segment>
          </Form>
          <Message compact>
            Already have an account? <Button onClick={this.props.handleClick}>Go Back</Button>
          </Message>
        </div>
      </div>
    )
  }
}



export default connect(null, { createUser })(SignUp)
