export function getAllTravelSpots () {
  return function(dispatch) {
    fetch('http://localhost:3002/travelspots/',{
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({type: "GET_ALL_TRAVELSPOTS", data: json})
      })
  }
}

export function getUsersTravelSpots (userId){
  return function(dispatch) {
    dispatch({type: 'LOADING_USERS_TRAVELSPOTS'})
    fetch(`http://localhost:3002/users_travelspots/${userId}`,{
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({type: "GET_USERS_TRAVELSPOTS", data: json})
        return json
      })
  }
}

export function addTravelSpot (payload){
  return function(dispatch) {
    fetch('http://localhost:3002/travelspot',{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => {
        dispatch({type: "ADD_TRAVELSPOT", data: json})
      })
  }
}

export function addAccommodationRec (payload){
  return function(dispatch){
    fetch('http://localhost:3002/accommodations', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => {
        dispatch({type: 'ADD_ACCOMMODATION', data: json})
      })
  }
}
