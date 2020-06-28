import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import routes from 'Config/routes';
import client from 'Config/apolloClient';
import Layout from 'Components/layout/Layout';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} path={path} exact={exact} children={component} />
          ))}
          </Switch>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
