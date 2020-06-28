import ApolloClient from 'apollo-boost';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

import { typeDefs, resolvers, initialData } from './schema';

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
      const { message, locations, path } = graphQLErrors;
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
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
  data: initialData
});

export default client;