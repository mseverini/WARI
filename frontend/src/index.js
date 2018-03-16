import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo';
// If your server supports server rendering, use browserHistory replace with hashHistory.
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './store'
import registerServiceWorker from './registerServiceWorker'
import Main from './Main'
import './styles/main.css'

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Header from "./components/Header";

const state = window.__initialState__ || undefined
const store = configureStore( state)

const httpLink = createHttpLink({
  uri: '/graphql/',
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
      <BrowserRouter>
        <div>
          <Header/>
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
