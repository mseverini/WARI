import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo';
// If your server supports server rendering, use browserHistory replace with hashHistory.
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import './styles/main.css'

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const state = window.__initialState__ || undefined
const store = configureStore(hashHistory, state)
const history = syncHistoryWithStore(hashHistory, store)

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider  client={client}>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
