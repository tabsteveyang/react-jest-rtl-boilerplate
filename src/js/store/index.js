import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

// eslint-disable-next-line no-undef
const composeEnhancers = PRODUCTION ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

const middleware = [thunk]
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)
