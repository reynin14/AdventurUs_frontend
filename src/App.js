import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import { connect } from 'react-redux';
import { Grid, Image, Transition, Button, Icon } from 'semantic-ui-react'
import ListTravelSpotForm from './components/ListTravelSpotForm'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DisplayUsersTravelSpots from './components/DisplayUsersTravelSpots'
import DisplayAllTravelSpots from './components/DisplayAllTravelSpots'
import LoadingScreen from './components/LoadingScreen.js'
import loadingAnimation from './images/magequit_loading.gif'
import LoginForm from './components/LoginForm'
import { elastic as Menu } from 'react-burger-menu'
import { logoutUser } from './actions/users'
import { getUsersTravelSpots, getAllTravelSpots } from './actions/travelspots'
import LoadingScreenTravelSpots from './components/LoadingScreenTravelSpots'
import airportWalk from './images/airportWalk.gif'
import airplane from './images/airplane.gif'
import headerGif from './images/travelling-animated-gif-3.gif'
import Animated from 'animated/lib/targets/react-dom'
import logo from './images/logo2final.png'
import GlobalMapContainer from './components/mapComponents/GlobalMapContainer'
import Easing from 'animated/lib/Easing'
import backPacking from './images/backpacking_pic.jpg'
import bAndWTravel from './images/blackandwhite_travel.jpg'
import travelMan from './images/traveling_alone.jpg'
import mapBackground from './images/Man-In-Airport.jpg'
import welcomeSign from './images/welcomeSign.png'
import travelSpotsBackground from './images/travelSpotsBackground.jpg'
import addTravelSpotsBackground from './images/addTravelSpotsBackground.jpg'
import touristPic from './images/touristPic.jpg'
import nightPic from './images/city_night_pic.jpg'



class App extends Component {

  state = {
    loadingScreenIsVisible: true,
    loginScreenIsVisible: true,
    loggedInUser: null,
    showUserTravelSpotButton: true

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  scrollToMain = () => {
    this.refs.parallax.scrollTo(1)
  }

  handleLoadingScreenVisibility = () => this.setState({ loadingScreenIsVisible: !this.state.loadingScreenIsVisible })

  handleLoginScreenVisibility = () => this.setState({ loginScreenIsVisible: !this.state.loginScreenIsVisible })


  showSettings = (event) => {
    event.preventDefault()
  }

  handleLogout = () => {
    this.props.logoutUser()
  }

  // getTheTravelSpots = () => {
  //   let userId = parseInt(localStorage.getItem('id'), 10)
  //   this.props.getUsersTravelSpots(userId)
  //   this.setState({
  //     showUserTravelSpotButton: false
  //   })
  // }

  componentDidMount(){
    this.props.getAllTravelSpots()

    let userId = parseInt(localStorage.getItem('id'), 10)
    this.props.getUsersTravelSpots(userId)

    setTimeout(this.handleLoadingScreenVisibility, 4000)
    this.setState({
      loggedInUser: this.props.currentUser
    })

  }

  render() {
    const { loadingScreenIsVisible, loginScreenIsVisible, loggedInUser } = this.state

    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const sideBarStyles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }


    return (
      <div>
        <div id="outer-container">

          <Menu width={ 220 } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={ false } styles={ sideBarStyles }>

            <Button.Group vertical labeled icon size='tiny'>
              <Button icon='home' content='Home' onClick={() => {this.refs.parallax.scrollTo(1)}} />
              <Button icon='binoculars' content='Map' onClick={() => {this.refs.parallax.scrollTo(2)}} />
              <Button icon='edit' content='Edit' onClick={() => {this.refs.parallax.scrollTo(3)}} />
              <Button icon='add circle' content='Add New' onClick={() => {this.refs.parallax.scrollTo(4)}} />

              {localStorage.getItem('token') ? <Button onClick={this.handleLogout} icon='sign out' content='Logout' /> : null}
            </Button.Group>

          </Menu>

          <Parallax ref="parallax" pages={7} effect={(animation, toValue) => Animated.timing(animation, { toValue, duration: 500, easing: Easing.elastic(4) })}>
            <main id="page-wrap">

              {/*Styling for layers*/}

              <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#FFFFFF' }} />
              <Parallax.Layer offset={1} speed={0.5} style={{
                  backgroundColor: '#FFFFFF',
                  backgroundImage: `url(${travelMan})`,
                  backgroundSize: 'cover'
                }} />
              <Parallax.Layer offset={2} speed={1} style={{
                  backgroundColor: '#FFFFFF',
                  backgroundImage: `url(${mapBackground})`,
                  backgroundSize: 'cover'
                 }} />
               <Parallax.Layer offset={3} speed={-2} style={{
                backgroundImage: `url(${travelSpotsBackground})`,
                backgroundSize: 'cover' }} />
              <Parallax.Layer offset={4} speed={1} style={{
                backgroundImage: `url(${addTravelSpotsBackground})`,
                backgroundSize: 'cover' }} />
              <Parallax.Layer offset={5} speed={-2} style={{
                backgroundImage: `url(${touristPic})`,
                backgroundSize: 'cover' }} />
              <Parallax.Layer offset={6} speed={1} style={{
                backgroundImage: `url(${nightPic})`,
                backgroundSize: 'cover' }} />



              <Parallax.Layer
                offset={0}
                speed={-2}
                style={{
                  backgroundImage: `url(${headerGif})`,
                  backgroundSize: 'cover',
                  fontFamily: 'Menlo-Regular, Menlo, monospace',
                  fontSize: 14,
                  lineHeight: '10px',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px'
                }}
              >

              </Parallax.Layer>


              <Parallax.Layer
                offset={1}
                speed={-1}
                style={{
                  fontFamily: 'Menlo-Regular, Menlo, monospace',
                  fontSize: 14,
                  lineHeight: '10px',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'flex-start',
                  paddingTop: '50px',
                  justifyContent: 'center'
                }}
              >

                <div>
                  {localStorage.getItem('token') ? <Image src={logo} centered /> : loginScreenIsVisible ? <LoginForm handleClick={this.handleLoginScreenVisibility} /> : <SignUp handleClick={this.handleLoginScreenVisibility} />}
                </div>

              </Parallax.Layer>

              <Parallax.Layer
                offset={2}
                speed={1}
                style={{
                  fontFamily: 'Menlo-Regular, Menlo, monospace',
                  fontSize: 14,
                  lineHeight: '10px',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '50px',
                  justifyContent: 'center',
                }}
              >

                {this.props.loadedAllTravelSpots ? <GlobalMapContainer /> : null}

              </Parallax.Layer>

              <Parallax.Layer
                offset={3}
                speed={0.5}
                style={{
                  fontFamily: 'Menlo-Regular, Menlo, monospace',
                  fontSize: 14,
                  lineHeight: '10px',
                  color: 'black',
                  display: 'flex',
                  top: '250px',
                  padding: '50px',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  left: '300px'
                }}
              >
                {this.props.usersSpotsLoaded && localStorage.getItem('token') ? <DisplayUsersTravelSpots /> : null}
              </Parallax.Layer>

              <Parallax.Layer
                offset={4}
                speed={-0.1}
                style={styles}
              >

                <Grid container columns={2}>
                  <Grid.Column>
                  </Grid.Column>
                  <Grid.Column>
                    {localStorage.getItem('token') ? <ListTravelSpotForm /> : null}
                  </Grid.Column>
                </Grid>

              </Parallax.Layer>

              <Parallax.Layer
                offset={5}
                speed={0.5}
                style={styles}
              >

              </Parallax.Layer>

              <Parallax.Layer
                  offset={6}
                  speed={0.5}
                  style={styles}
              >

              </Parallax.Layer>


            </main>
          </Parallax>


        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
    usersSpotsLoaded: state.travelSpotReducer.usersSpotsLoaded,
    loadedAllTravelSpots: state.travelSpotReducer.loadedAllTravelSpots
  }
}

export default connect(mapStateToProps, { logoutUser, getUsersTravelSpots, getAllTravelSpots } )(App);


// <Transition.Group animation={'vertical flip'} duration={1500} content={loadingScreenIsVisible ? 'Unmount' : 'Mount'}>
//
//   {loadingScreenIsVisible && <Image src={loadingAnimation} style={
//         {
//           height: '110%', width: '100%',
//           background: '#333',
//           position: 'absolute',
//           top: 0,
//           left: 0
//         }
//       }
//    />}
//
// </Transition.Group>
