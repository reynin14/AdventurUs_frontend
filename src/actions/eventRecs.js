export function loadCurrentTravelSpotEventRecs (payload){
  return function(dispatch){
    dispatch({type: "LOAD_CURRENT_TS_EVENT_RECS", data: payload})
  }
}

export function addEventRec (payload){
  return function(dispatch){
    fetch('http://localhost:3002/events', {
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
        dispatch({type: 'ADD_EVENT', data: json})
      })
  }
}

export function deleteEventRec (id){
  return function(dispatch){
    fetch(`http://localhost:3002/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      },
    })
      .then(
        dispatch({type: 'DELETE_EVENT', id: id})
      )
  }
}

export function updateEventRec (payload, id){
  return function(dispatch){
    fetch(`http://localhost:3002/events/${id}`, {
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
        dispatch({type: 'UPDATE_EVENT', data: json})
      })
  }
}
