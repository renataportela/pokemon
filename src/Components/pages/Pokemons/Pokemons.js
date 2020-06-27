import React from 'react';
import { Link } from 'react-router-dom';

function Pokemons(props) {
  return (
    <div>
      <h1>Pokemons</h1>

      <p><Link to="/pokemon">Pokemon</Link></p>
    </div>
  );
}

export default Pokemons;