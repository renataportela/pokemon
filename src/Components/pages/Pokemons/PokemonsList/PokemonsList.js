import React from 'react';

import useSearchFor from 'Components/pages/Pokemons/useSearchFor';
import usePokemonsQuery from './usePokemonsQuery';
import PokemonCard from './PokemonCard';

function PokemonsList() {
  const { search } = useSearchFor();
  const { pokemons, loading, error } = usePokemonsQuery(search);

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