import {
  SET_USER_INFO,
  CLEAR_USER_INFO
} from '../actions'

const defaultUserInfo = {
  userId: '',
  userName: '',
  userImg: ''
}
export const userInfo = (state = defaultUserInfo, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...action.data
      }
    case CLEAR_USER_INFO:
      return defaultUserInfo
    default:
      return state
  }
}
