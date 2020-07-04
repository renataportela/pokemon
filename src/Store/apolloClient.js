import ApolloClient from 'apollo-boost';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

import { typeDefs, resolvers, initialState } from './schema';

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'Pokemon': return object.id;
      default: return defaultDataIdFromObject(object);
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log(
        `[GraphQL error]`, graphQLErrors
      );
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  },
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: initialState
});

export default client;