import gql from 'graphql-tag';
import { setSearchFor } from 'Components/pages/Pokemons/useSearchFor';

export const initialData = {
  pokemonsG1: [],
  searchFor: '',
};

export const typeDefs = gql`
  extend type Query {
    pokemonsG1: [Pokemon]
    searchFor: String!
  }

  extend type Mutation {
    setSearchFor(name: String!): String!
  }
`;

export const resolvers = {
  Mutation: {
    setSearchFor,

    // updatePokemon: (_, { id, ...pokemonData }, { cache }) => {
    //   const queryResult = cache.readQuery({
    //     query: GET_POKEMONS
    //   });

    //   if (queryResult) {
    //     const { pokemons } = queryResult;
    //     const data = {
    //       pokemons: [...pokemons, { id, ...pokemonData }]
    //     };

    //     cache.writeQuery({ query: GET_POKEMONS, data });
    //     return data.pokemons;
    //   }
    //   return [];
    // }    
  }
};
