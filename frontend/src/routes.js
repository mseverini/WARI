import React from 'react'
import { Route, Switch  } from 'react-router-dom'
import App from './components/App'
import Area from './pages/Area'
import ClimbingRoute from './pages/Route'
import SignIn from './components/Authentication/LogIn'
import SignUp from './components/Authentication/SignUp'
import ForgotPassword from './components/Authentication/ForgotPassword'
import ResetPassword from './components/Authentication/ResetPassword'

function requireAuth(Component) {
  return !global.sessionStorage.getItem('token') ?
    SignIn :
    Component
}

const routes = (
  <main>
    <Switch path="/" component={App} >
      <Route exact path="/" component={requireAuth(Area)}/>
      <Route path="/Area/:id" component={requireAuth(Area)} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Route/:id" component={requireAuth(ClimbingRoute)} />
      <Route path="/ResetPassword" component={ResetPassword} />
      <Route path="/ForgotPassword" component={ForgotPassword} />
    </Switch>
  </main>
)

export default routes
