import {
  SET_SETTINGS
} from '../actions'

const defaultSettings = {
  fetched: false
}
export const settings = (state = defaultSettings, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        fetched: true,
        ...action.data
      }
    default:
      return state
  }
}
