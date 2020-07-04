import React from 'react';

import { Heading } from 'Components/common/ui';
import { PokemonsList } from 'Components/pokemon';
import { SearchByName } from 'Components/search';

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