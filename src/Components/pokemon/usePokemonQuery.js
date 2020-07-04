import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function usePokemonQuery(id) {
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, { variables: { id }});

  return { 
    pokemon: !!data ? data.pokemon : {}, 
    loading, 
    error 
  };
}

export const POKEMON_DATA = gql`
  fragment PokemonData on Pokemon {
    id
    name
    image
    types
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query pokemon($id: String!) @client {
    pokemon(id: $id) {
      ...PokemonData
    }
  }
  ${POKEMON_DATA}
`;

export default usePokemonQuery;