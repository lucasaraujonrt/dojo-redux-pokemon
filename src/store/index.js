import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import pokemonsReducer from './reducers/pokemons';


const reduxStore = () => {
  const store = createStore(
    combineReducers(
      {
        pokemons: pokemonsReducer
      },
    ),
    compose(applyMiddleware(thunk)),
  );

  return store;
} 

export default reduxStore;

