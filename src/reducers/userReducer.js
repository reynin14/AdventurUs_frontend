export default function userReducer(state = {
}, action){
  switch(action.type){
    case 'LOGIN':
      localStorage.setItem('token', action.data.jwt)
      localStorage.setItem('id', action.data.user.id)
      return {...state, currentUser: action.data.user}
    case 'SIGNUP':
      localStorage.setItem('token', action.user.jwt)
      localStorage.setItem('id', action.data.user.id)
      return {...state, currentUser: action.data.user.username}
    case 'LOGOUT':
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      return {...state, currentUser: null}
    default:
      return state
  }
}
