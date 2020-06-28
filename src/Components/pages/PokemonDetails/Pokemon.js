import React from 'react';
import { Link } from 'react-router-dom';

function Pokemon(props) {
  return (
    <div>
      <h1>Nome do Pokemon</h1>

      <p><Link to="/">Pokemons</Link></p>
      <p><Link to="/pokemon/editar">Editar</Link></p>
    </div>
  );
}

export default Pokemon;