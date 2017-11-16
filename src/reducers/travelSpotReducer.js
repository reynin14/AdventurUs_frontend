export default function travelSpotReducer(state = {
  loadedAllTravelSpots: false,
  loadingUsersSpots: false,
  usersSpotsLoaded: false,
  allTravelSpots: []
}, action){
  switch(action.type){
    case 'GET_ALL_TRAVELSPOTS':
      return {...state, allTravelSpots: action.data, loadedAllTravelSpots: true}
    case 'GET_USERS_TRAVELSPOTS':
      return {...state,
        usersTravelSpots: action.data,
        loadingUsersSpots: false,
        usersSpotsLoaded: true,
        }
    case 'LOADING_USERS_TRAVELSPOTS':
      return {...state, loadingUsersSpots: true}
    case 'LOADING_ALL_TRAVELSPOTS':
      return {...state, loadedAllTravelSpots: true}
    case 'ADD_TRAVELSPOT':
      let travelSpotsData = state.usersTravelSpots ? [...state.usersTravelSpots, action.travelSpots] : [action.travelSpots]
      return {...state, usersTravelSpots: travelSpotsData}
    default:
      return state
  }
}
