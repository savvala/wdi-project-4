import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import CardsNew from './CardsNew';

const CardsRoutes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/foods/new" component={CardsNew} />
    </Switch>
  );
};

export default CardsRoutes;
