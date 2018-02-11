import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Area from './pages/Area'
import ClimbingRoute from './pages/Route'
import SignIn from './components/Authentication/LogIn'
import SignUp from './components/Authentication/SignUp'

function requireAuth(Component) {
  return !global.sessionStorage.getItem('token') ?
    SignIn :
    Component
}

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={requireAuth(Area)}/>
    <Route path="/Area/:id" component={requireAuth(Area)} />
    <Route path="/SignIn" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Route/:id" component={requireAuth(ClimbingRoute)} />
  </Route>
)

export default routes
