import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
       <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lista">Lista de Pokemons</Link>
          </li>
          <li>
            <Link to="/nome">Nome do Pokemon</Link>
          </li>
        </ul>
    </div>
  )
}

export default Home;