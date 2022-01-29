import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middleware = [thunk]
export default (initialState) => {
  const mockStore = configureMockStore(middleware)(initialState)
  // eslint-disable-next-line no-undef
  mockStore.dispatch = jest.fn(mockStore.dispatch)
  return mockStore
}