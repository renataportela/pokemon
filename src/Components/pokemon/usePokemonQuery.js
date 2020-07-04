import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { POKEMON_DATA } from './pokemonFragment';

function usePokemonQuery(id) {
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, { variables: { id }});

  return { 
    pokemon: !!data ? data.pokemon : {}, 
    loading, 
    error 
  };
}

export const GET_POKEMON_BY_ID = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      ...PokemonData
    }
  }
  ${POKEMON_DATA}
`;

export default usePokemonQuery;