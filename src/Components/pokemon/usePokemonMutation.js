import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { GET_POKEMON_BY_ID } from './usePokemonQuery';

function usePokemonMutation(id) {
  const [ updatePokemon ] = useMutation(UPDATE_POKEMON);

  return { 
    updatePokemon: pokemonData => {
      return updatePokemon({ variables: { id, data: pokemonData }});
    },
  };
}

const UPDATE_POKEMON = gql`
  mutation updatePokemon($id: ID!, $data: Pokemon!) {
    updatePokemon(id: $id, data: $data) @client
  }
`;

export function updatePokemonResolver(_, { id, data }, { cache }) {
  const { pokemon } = cache.readQuery({ query: GET_POKEMON_BY_ID, variables: { id } });
  const updated = { ...pokemon, ...data };

  cache.writeData({ id, data: updated });
  return null;
}

export default usePokemonMutation;