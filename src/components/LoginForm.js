import React from 'react'
import { connect } from 'react-redux';
import { setUser } from '../actions/users'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class LoginForm extends React.Component {
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
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              <Image src='/logo.png' />
              {' '}Sign in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={(event) => this.setState({username: event.target.value})}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(event) => this.setState({password: event.target.value})}
                />

              <Button onClick={this.handleSubmit} color='black' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Button onClick={this.props.handleClick}>Sign Up</Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps, { setUser })(LoginForm)
