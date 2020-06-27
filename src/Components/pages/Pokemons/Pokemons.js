import React from 'react';

import Search from './Search';
import PokemonsList from './PokemonsList';

function Pokemons(props) {
  return (
    <div>
      <h1>Pokemons</h1>

      <Search />
      <PokemonsList />
    </div>
  );
}

export default Pokemons;