import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function usePokemon(id) {
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, { variables: { id }});

  return { 
    pokemon: !!data ? data.pokemon : {}, 
    loading, 
    error 
  };
}

const GET_POKEMON_BY_ID = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
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
  }
`;

export default usePokemon;