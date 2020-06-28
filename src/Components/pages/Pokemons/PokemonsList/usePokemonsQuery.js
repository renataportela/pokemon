import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function usePokemonsQuery(searchFor) {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const pokemons = !!data ? data.pokemonsG1 : [];

  return { 
    pokemons: filterPokemons(pokemons, searchFor), 
    loading, 
    error 
  };
}

function filterPokemons(pokemons, searchFor) {
  if (!searchFor) return pokemons;
  const reg = new RegExp(searchFor, 'i');
  return pokemons.filter(pokemon => pokemon.name.match(reg) || pokemon.types.some(pokemonName => pokemonName.match(reg)));
}

const GET_POKEMONS = gql`
  query allPokemons {
    pokemonsG1 @client {
      id
      name
      image
      types
    }
  }
`;

export default usePokemonsQuery;