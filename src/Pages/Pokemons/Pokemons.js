import React from 'react';

import { PokemonsList } from 'Components/modules/pokemon';
import { SearchByName } from 'Components/modules/search';

function Pokemons() {
  return (
    <>
      <h1>Pokemons</h1>

      <SearchByName />
      <PokemonsList />
    </>
  );
}

export default Pokemons;