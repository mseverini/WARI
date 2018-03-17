import React from 'react'
import { Route, Switch  } from 'react-router-dom'
import App from './components/App'
import Area from './pages/Area'
import ClimbingRoute from './pages/Route'
import SignIn from './components/Authentication/LogIn'
import SignUp from './components/Authentication/SignUp'
import Forgot from './components/Authentication/ForgotPassword'
import Reset from './components/Authentication/ResetPassword'

function requireAuth(Component) {
  return !global.sessionStorage.getItem('token') ?
    SignIn :
    Component
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={requireAuth(Area)}/>
      <Route path="/Area/:id" component={requireAuth(Area)} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Route/:id" component={requireAuth(ClimbingRoute)} />
      <Route path="/ResetPassword" component={Reset} />
      <Route path="/ForgotPassword" component={Forgot} />
    </Switch>
  </main>
)

export default Main
