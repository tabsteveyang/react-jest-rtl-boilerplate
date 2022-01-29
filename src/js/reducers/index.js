import { combineReducers } from 'redux'
import { settings } from './settings'
import { userInfo } from './userInfo'

const appReducer = combineReducers({
  settings,
  userInfo
})
const rootReducer = (state, action) => {
  if (action.type === 'LOGGED_OUT') { // clear reducers after logning out
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
