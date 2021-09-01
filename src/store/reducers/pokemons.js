import * as PokemonsAction from '../actions/pokemons';

const initialState = {
  list: []
};

export default function pokemonsReducer (state = initialState, action) {
  switch (action.type) {
    case PokemonsAction.GET_POKEMONS:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state;
  }
}