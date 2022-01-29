import { Provider } from 'react-redux'
import store from './store'

const MockProvider = ({ children = null, mockStore = null }) => {
  return (
    <Provider store={mockStore || store}>
      { children }
    </Provider>
  )
}
MockProvider.propTypes = {
  mockStore: PropTypes.object,
  children: PropTypes.node
}
export default MockProvider
