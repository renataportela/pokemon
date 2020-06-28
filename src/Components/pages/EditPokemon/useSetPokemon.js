import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// import { GET_POKEMONS } from 'Components/pages/Pokemons/PokemonsList/usePokemonsQuery';

function usePokemon(id) {
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, { variables: { id }});
  const [ updatePokemon ] = useMutation(SET_POKEMON);

  return { 
    pokemon: !!data ? data.pokemon : {}, 
    setPokemon: data => updatePokemon({ variables: { data }}),
    loading, 
    error 
  };
}

const GET_POKEMON_BY_ID = gql`
  query pokemonById($id: String!) {
    pokemon(id: $id) {
      id
      name
      image
    }
  }
`;

// const GET_POKEMON_BY_ID = gql`
//   query pokemonById($id: String!) {
//     pokemonsG1(id: $id) @client {
//       id
//       name
//       image
//     }
//   }
// `;

const SET_POKEMON = gql`
  mutation updatePokemon($data: Pokemon!) {
    updatePokemon(data: $data) @client
  }
`;

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

export function updatePokemon(_, { data }, { cache }) {
  const { id, ...pokemonData } = data;
  const queryResult = cache.readQuery({
    query: GET_POKEMONS
  });

  if (queryResult) {
    const updatedData = [...queryResult.pokemons];
    const index = updatedData.findIndex(o => o.id === id);

    updatedData[index] = { id, ...pokemonData, __typename: "Pokemon" };

    console.log('updatedData', updatedData);

    cache.writeQuery({ query: GET_POKEMONS, data: { pokemons: updatedData } });

    // cache.writeData({ data: { pokemons: updatedData } });

    return data;
  }

  return null;
}

// export function updatePokemon(_, data, { cache }) {
//   const { id, ...pokemonData } = data;
//   const queryResult = cache.readQuery({
//     query: GET_POKEMONS
//   });

//   if (queryResult) {
//     const updatedData = [...queryResult.pokemonsG1];

//     updatedData[id] = { id, ...pokemonData };

//     cache.writeQuery({ query: GET_POKEMONS, data: { pokemonsG1: updatedData } });

//     return data;
//   }

//   return null;
// }

export default usePokemon;