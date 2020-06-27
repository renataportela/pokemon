import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import routes from 'Routes';
import client from 'GraphQL/apolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} children={component} />
        ))}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
