import React from 'react';
import { Link } from 'react-router-dom';

function EditPokemon(props) {
  return (
    <div>
      <h1>Editar Pokemon</h1>

      <p><Link to="/">Pokemons</Link></p>
      <p><Link to="/pokemon">Pokemon</Link></p>
    </div>
  );
}

export default EditPokemon;