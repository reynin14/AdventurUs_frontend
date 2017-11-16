export default function travelSpotReducer(state = {
  loadedAllTravelSpots: false,
  loadingUsersSpots: false,
  usersSpotsLoaded: false,
  allTravelSpots: [],
  usersTravelSpots: []
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
      let travelSpotsData = state.usersTravelSpots ? [...state.usersTravelSpots, action.data] : [action.data]
      return {...state, usersTravelSpots: travelSpotsData}
    case 'DELETE_TRAVELSPOT':
      let deletedUsersTravelSpotData = state.usersTravelSpots.filter((travelSpot) => {
        return travelSpot.id !== action.id
      })
      let newAllTravelSpotsData = state.allTravelSpots.filter((travelSpot) => {
        return travelSpot.id !== action.id
      })
      return {...state, usersTravelSpots: deletedUsersTravelSpotData, allTravelSpots: newAllTravelSpotsData}
    default:
      return state
  }
}
