import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import InfoBox from './InfoBox'
import { connect } from 'react-redux';


class GlobalMap extends Component {

  state = {
    displayInfoBox: false,
    infoBoxLat: 40.7829,
    infoBoxLng: -73.9654,
    infoBoxData: null,
    currentInfoBox: null
  }

  static defaultProps = {
    center: {lat: 35.026151, lng: -40.440076},
    zoom: 1,
    minZoomOverride: true,
    overviewMapControl: true
  };

  // childMouseEnter = (num, childProps) => {
  //
  //   this.setState({
  //     displayInfoBox: true,
  //     infoBoxLat: childProps.lat,
  //     infoBoxLng: childProps.lng,
  //     infoBoxData: childProps.data
  //   })
  //
  // }

  handleClick = (num, childProps) => {

    let resetInfoBox = () => {
      this.setState({
        displayInfoBox: false
      }, this.setState({
        displayInfoBox: true,
        infoBoxLat: childProps.lat,
        infoBoxLng: childProps.lng,
        infoBoxData: childProps.data
      }))
    }

    let openInfoBox = () => {
      this.setState({
        displayInfoBox: true,
        infoBoxLat: childProps.lat,
        infoBoxLng: childProps.lng,
        infoBoxData: childProps.data
      })
    }

    this.state.displayInfoBox ? resetInfoBox() : openInfoBox()
  }

  // childMouseLeave = () => {
  //   this.setState({
  //     displayInfoBox: false
  //   })
  // }



  render() {

    let markerList

    if (localStorage.getItem('token') && this.props.loadedAllTravelSpots){
      markerList = (
        this.props.travelSpots.map((travelSpot) => {
          return (
            <Marker data={travelSpot} lat={travelSpot.latitude} lng={travelSpot.longitude} key={travelSpot.id}/>
          )}
        )
      )
    } else {
      markerList = null
    }

    const mapOptions = {
      styles: [
          {
              "featureType": "landscape",
              "stylers": [
                  {
                      "hue": "#FFBB00"
                  },
                  {
                      "saturation": 43.400000000000006
                  },
                  {
                      "lightness": 37.599999999999994
                  },
                  {
                      "gamma": 1
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "stylers": [
                  {
                      "hue": "#FFC200"
                  },
                  {
                      "saturation": -61.8
                  },
                  {
                      "lightness": 45.599999999999994
                  },
                  {
                      "gamma": 1
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "stylers": [
                  {
                      "hue": "#FF0300"
                  },
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 51.19999999999999
                  },
                  {
                      "gamma": 1
                  }
              ]
          },
          {
              "featureType": "road.local",
              "stylers": [
                  {
                      "hue": "#FF0300"
                  },
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 52
                  },
                  {
                      "gamma": 1
                  }
              ]
          },
          {
              "featureType": "water",
              "stylers": [
                  {
                      "hue": "#0078FF"
                  },
                  {
                      "saturation": -13.200000000000003
                  },
                  {
                      "lightness": 2.4000000000000057
                  },
                  {
                      "gamma": 1
                  }
              ]
          },
          {
              "featureType": "poi",
              "stylers": [
                  {
                      "hue": "#00FF6A"
                  },
                  {
                      "saturation": -1.0989010989011234
                  },
                  {
                      "lightness": 11.200000000000017
                  },
                  {
                      "gamma": 1
                  }
              ]
          }
      ]
    }

    return (
      <GoogleMapReact
        onChildMouseEnter={this.childMouseEnter}
        onChildClick={this.handleClick}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        options={mapOptions}
        bootstrapURLKeys={{
        key: 'AIzaSyBXMB4ePbZAHIOlNxKpCuaHfrZ9JXSgWLM',
        language: 'en'}}
      >

        {markerList}

        { this.state.displayInfoBox ? <InfoBox data={this.state.infoBoxData} lat={this.state.infoBoxLat} lng={this.state.infoBoxLng}/> : null}

      </GoogleMapReact>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    travelSpots: state.travelSpotReducer.allTravelSpots,
    currentUser: state.userReducer.currentUser,
    loadedAllTravelSpots: state.travelSpotReducer.loadedAllTravelSpots
  })
}

export default connect(mapStateToProps)(GlobalMap)
