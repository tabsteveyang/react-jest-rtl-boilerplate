import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from '../components/App'

const AppRouter = (props) => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  )
}
AppRouter.propTypes = {
  config: PropTypes.object
}
export default AppRouter
