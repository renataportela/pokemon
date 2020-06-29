import React from 'react';

import { Heading } from 'Components/ui';
import { PokemonsList } from 'Components/modules/pokemon';
import { SearchByName } from 'Components/modules/search';

function Pokemons() {
  return (
    <>
      <Heading size="1" textAlign="center">Pokemons</Heading>

      <SearchByName />
      <PokemonsList />
    </>
  );
}

export default Pokemons;