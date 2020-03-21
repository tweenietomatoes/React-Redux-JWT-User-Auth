import { combineReducers } from 'redux'
import userReducer from './user'
import postsReducer from './posts'

export default combineReducers({
  userReducer,
  postsReducer
})