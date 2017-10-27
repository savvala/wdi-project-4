import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import CardsNew from './CardsNew';
import CardsIndex from './CardsIndex';
import CardsShow from './CardsShow';
import CardsEdit from './CardsEdit';

const CardsRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/cards/new" component={CardsNew} />
      <ProtectedRoute path="/cards/index" component={CardsIndex} />
      <Route path="/cards/:id" component={CardsShow} />
      <ProtectedRoute path="/cards/:id/edit" component={CardsEdit} />
    </Switch>
  );
};

export default CardsRoutes;
