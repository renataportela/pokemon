import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import routes from 'Routes';
import client from 'GraphQL/apolloClient';
import useFetchPokemons from 'Components/pages/useFetchPokemons';

function App() {
  return (
    <ApolloProvider client={client}>
      <LoadingApp />
    </ApolloProvider>
  );
}

function LoadingApp() {
  const { loading, error } = useFetchPokemons();

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <Router>
      <Switch>
      {routes.map(({ path, exact, component }) => (
        <Route key={path} path={path} exact={exact} children={component} />
      ))}
      </Switch>
    </Router>
  );    
}

export default App;
