import PokemonsAPI from "../../api/pokemon";

export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => async (dispatch) => {
  const response = await PokemonsAPI.getPokemons();
  if (response) {
    dispatch({
      type: GET_POKEMONS,
      payload: response,
    })
  }
}

// todo criar um por nome e trazer na lista de nome