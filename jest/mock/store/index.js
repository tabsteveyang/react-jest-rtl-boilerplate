import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '@js/reducers'

// eslint-disable-next-line no-undef
const composeEnhancers = compose

const middleware = [thunk]
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)
