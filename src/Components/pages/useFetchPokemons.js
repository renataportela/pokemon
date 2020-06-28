import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function useFetchPokemon() {
  const client = useApolloClient();

  const { loading, error } = useQuery(GET_POKEMONS, {
    onCompleted: data => {
      if (!!data && !!data.pokemons) {
        client.writeData({ data: { pokemonsG1: data.pokemons } });
      }
    }
  });
  
  return { loading, error };
}

const GET_POKEMONS = gql`
  {
    pokemons(first: 151) {
      id
      name
      image
      types
    }
  }
`;

export default useFetchPokemon;