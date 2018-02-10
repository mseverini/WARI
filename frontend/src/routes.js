import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Area from './pages/Area'
import ClimbingRoute from './pages/Route'
import SignIn from './components/Authentication/LogIn'
import SignUp from './components/Authentication/SignUp'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={!global.sessionStorage.getItem('token')? SignIn : Area} />
    <Route path="/Area/:id" component={Area} />
    <Route path="/SignIn" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Route/:id" component={ClimbingRoute} />
  </Route>
)

export default routes
