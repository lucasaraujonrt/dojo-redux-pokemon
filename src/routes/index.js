import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonList from '../pages/PokemonList';
import PokemonName from '../pages/PokemonName';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lista">
          <PokemonList />
        </Route>
        <Route path="/nome">
          <PokemonName />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
