import API from './index';

const PokemonsAPI = {
  getPokemons: async () => {
    const { data } = await API.get('');
    return data 
  }
}

export default PokemonsAPI;
