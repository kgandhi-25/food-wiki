import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import NotFound from './components/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe/:id" component={Recipe} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
