import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Area from './pages/Area'
import ClimbingRoute from './pages/Route'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Area} />
    <Route path="/Area/:id" component={Area} />
    <Route path="/Route/:id" component={ClimbingRoute} />
  </Route>
)

export default routes
