import * as api from '../api'

export const SET_SETTINGS = 'SET_SETTINGS'
export const startSetSettings = () => dispatch => {
  return new Promise((resolve, reject) => {
    api.getSettings()
      .then(res => {
        if (res) {
          dispatch(setSettings(res))
        }
        resolve()
      })
  })
}
export const setSettings = (data) => ({
  type: SET_SETTINGS,
  data
})

export const SET_USER_INFO = 'SET_USER_INFO'
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO'
export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data
})
export const clearUserInfo = () => ({
  type: CLEAR_USER_INFO,
})
