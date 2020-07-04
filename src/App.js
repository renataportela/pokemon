import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import routes from 'Routes';
import client from 'Store/apolloClient';
import Layout from 'Components/common/layout';

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
