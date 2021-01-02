import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Conselho from './pages/Conselho';

function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/conselho" exact component={Conselho} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;