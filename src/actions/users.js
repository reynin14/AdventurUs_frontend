export function setUser(username, password){
  return function(dispatch) {
    fetch('http://localhost:3002/login',{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => res.json())
      .then(json => {
        dispatch({type: 'LOGIN', data: json})
      })
  }
}

export function createUser(payload){
  return function(dispatch){
    fetch('http://localhost:3002/users',{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => {
        dispatch({type: 'SIGNUP', user: json})
      })
  }
}

export function logoutUser(){
  return function(dispatch){
    dispatch({type: 'LOGOUT'})
  }
}
