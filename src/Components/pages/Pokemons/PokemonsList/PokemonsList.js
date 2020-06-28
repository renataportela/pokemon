import React from 'react';

import { usePokemons, useSearchFor } from 'Components/data';
import PokemonCard from './PokemonCard';

function PokemonsList() {
  const { search } = useSearchFor();
  const { pokemons, loading, error } = usePokemons(search);

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonsList;