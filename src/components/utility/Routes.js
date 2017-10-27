import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import CardsNew from '../cards/CardsNew';
import NoRoute from './NoRoute';


import Login from '../auth/Login';
import Register from '../auth/Register';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <ProtectedRoute exact path="/foods/new" component={CardsNew} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NoRoute} />
    </Switch>
  );
};

export default Routes;
