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
