import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import CardsNew from '../cards/CardsNew';
import CardsIndex from '../cards/CardsIndex';
import CardsShow from '../cards/CardsShow';
import CardsEdit from '../cards/CardsEdit';
import NoRoute from './NoRoute';

import Login from '../auth/Login';
import Register from '../auth/Register';

import Message from '../trade/Message';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <ProtectedRoute exact path="/cards/new" component={CardsNew} />
      <ProtectedRoute exact path="/cards" component={CardsIndex} />
      <ProtectedRoute exact path="/cards/:id" component={CardsShow} />
      <ProtectedRoute exact path="/cards/:id/edit" component={CardsEdit} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/message" component={Message} />
      <Route component={NoRoute} />
    </Switch>
  );
};

export default Routes;
