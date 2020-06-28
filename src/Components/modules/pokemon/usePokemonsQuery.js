import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function usePokemonsQuery(searchFor) {
  const { loading, error, data } = useQuery(POKEMONS_QUERY);
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

export const POKEMONS_QUERY = gql`
  query pokemons {
    pokemons(first: 151) {
      id
      name
      image
      types
    }
  }
`;

export default usePokemonsQuery;