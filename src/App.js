import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import routes from 'Routes';

function App() {
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
