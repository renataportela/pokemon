import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { POKEMONS_QUERY } from 'Components/data/usePokemons';

function useUpdatePokemon(id) {
  const [ updatePokemon ] = useMutation(SET_POKEMON);

  return { 
    updatePokemon: pokemonData => {
      console.log('pokemonData', pokemonData);
      return updatePokemon({ variables: { data: { id, ...pokemonData } }})
    },
  };
}

const SET_POKEMON = gql`
  mutation updatePokemon($data: Pokemon!) {
    updatePokemon(data: $data) @client
  }
`;

// const GET_POKEMONS = gql`
//   {
//     pokemons(first: 151) {
//       id
//       name
//       image
//       types
//     }
//   }
// `;

export function updatePokemon(_, { data }, { cache }) {
  const queryResult = cache.readQuery({
    query: POKEMONS_QUERY
  });

  if (queryResult) {
    const pokemons = [...queryResult.pokemons];
    const index = pokemons.findIndex(o => o.id === data.id);

    pokemons[index] = { ...data, __typename: "Pokemon" };

    cache.writeQuery({ query: POKEMONS_QUERY, data: { pokemons } });

    return pokemons;
  }

  return [];
}

export default useUpdatePokemon;