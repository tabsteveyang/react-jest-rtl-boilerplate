import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const MockRouter = ({ children }) => {
  return (
    <Router history={createBrowserHistory()}>
      { children }
    </Router>
  )
}

MockRouter.propTypes = {
  children: PropTypes.node
}

export default MockRouter
