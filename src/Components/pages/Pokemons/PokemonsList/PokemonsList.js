import React from 'react';
import { Link } from 'react-router-dom';

function PokemonsList() {
  return (
    <div>
      list
      <p><Link to="/pokemon">Pokemon</Link></p>
    </div>
  );
}

export default PokemonsList;