import { combineReducers } from 'redux'
import userReducer from './userReducer'
import travelSpotReducer from './travelSpotReducer'
import eventReducer from './eventReducer'

const rootReducer = combineReducers({
  userReducer,
  travelSpotReducer,
  eventReducer
})

export default rootReducer
