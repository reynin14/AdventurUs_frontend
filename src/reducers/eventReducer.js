export default function eventReducer(state = {
  eventRecsLoaded: false,
  eventRecs: []
}, action){
  switch(action.type){
    case 'LOAD_CURRENT_TS_EVENT_RECS':
      return {...state, eventRecs: action.data, eventRecsLoaded: true}
    case 'ADD_EVENT':
      let newEventRecData = state.eventRecs ? [...state.eventRecs, action.data] : [action.data]
      return {...state, eventRecs: newEventRecData}
    case 'DELETE_EVENT':
      let deletedEventRecData = state.eventRecs.filter((eventRec) => {
        return eventRec.id !== action.id
      })

      return {...state, eventRecs: deletedEventRecData}
    case 'UPDATE_EVENT':
      let updatedArray = state.eventRecs.map((eventRec) => {
        if (eventRec.id === action.data.id){
          return action.data
        } else {
          return eventRec
        }
      })
      return {...state, eventRecs: updatedArray}
    default:
      return state
  }
}
