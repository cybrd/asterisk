import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from './Login';
import { ProtectedRoute, ProtectedAdminRoute } from './ProtectedRoute';

import { NoMatch } from './NoMatch';

export function Content() {
  return (
    <div id="content">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}
