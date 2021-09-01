import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../store/actions/pokemons';

const PokemonList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.pokemons.list);
  
  useEffect(() => dispatch(getPokemons()));

  return (
    <div>
      <h2>PokemonList</h2>
      <ul>
        {list.results?.map((item, index) => (
          <div>
            <li key={index}>{item.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;