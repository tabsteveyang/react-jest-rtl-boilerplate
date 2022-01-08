import { Router, Switch, Route } from 'react-router-dom'
import NotFound from './NotFound'
import MainPage from './MainPage'

const App = (props) => {
  return (
    <Router history={props.history}>
      <Switch>
        <Route path="(/|/index)" component={MainPage} exact/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
