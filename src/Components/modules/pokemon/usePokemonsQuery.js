import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { POKEMON_DATA } from 'Components/modules/pokemon/usePokemonQuery';

function usePokemonsQuery(searchFor) {
  const { loading, error, data } = useQuery(GET_POKEMONS, { variables: { first: 151 }});
  const pokemons = !!data ? data.pokemons : [];

  return { 
    pokemons: filterPokemons(pokemons, searchFor), 
    loading, 
    error 
  };
}

function filterPokemons(pokemons, searchFor) {
  if (!searchFor) return pokemons;
  const reg = new RegExp(searchFor, 'i');
  return pokemons.filter(pokemon => pokemon.name.match(reg));
}

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      ...PokemonData
    }
  }
  ${POKEMON_DATA}
`;

export default usePokemonsQuery;