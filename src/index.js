import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './App';

const link = new HttpLink({
  uri: 'https://api-useast.graphcms.com/v1/cjsxdlkb0eio501bsjb1mxp56/master'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>, document.getElementById('root')
)