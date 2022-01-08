import '@scss/index.scss'
import { Provider } from 'react-redux'
import Routers from './routers'
import store from './store'

ReactDom.render(
  <Provider store={store}>
    {/* you can send extra props to the Routers component if needed */}
    <Routers></Routers>
  </Provider>
  , document.getElementById('app')
)
