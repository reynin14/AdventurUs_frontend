import React from 'react'
import GlobalMap from './GlobalMap'
import { connect } from 'react-redux';

class GlobalMapContainer extends React.Component{

  render(){

    return(
      <div style={{ position: 'absolute', bottom: '10%'}}>
        <div style={{height: '65vh' , width: '65vw', margin: 'auto'}}>
          <h3 style={{paddingLeft: '400px', color: '#BD0000'}}>Click on a marker to view recommendations.</h3>
          {localStorage.getItem('token') ? <GlobalMap /> : null}
        </div>
      </div>

    )
  }
}


export default GlobalMapContainer
