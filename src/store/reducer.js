import { combineReducers } from 'redux-immutable'
// import { combineReducers } from 'redux'
import { reducer as authReducer } from '../components/Auth/store'
// import { reducer as headerReducer } from '../components/Header/store'
// import { reducer as createPairReducer } from '../pages/CreatePair/store'

export default combineReducers({
  auth: authReducer
})
