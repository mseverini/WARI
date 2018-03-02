import React from 'react'
import { Route, Switch  } from 'react-router-dom'
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

const Main = () => (
  <main>
    <Switch path="/" component={App} >
      <Route exact path="/" component={requireAuth(Area)}/>
      <Route path="/Area/:id" component={requireAuth(Area)} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Route/:id" component={requireAuth(ClimbingRoute)} />
    </Switch>
  </main>
)

export default Main
