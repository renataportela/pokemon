import gql from 'graphql-tag';
import { updatePokemonResolver } from 'Components/pokemon';
import { setSearchResolver } from 'Components/search';

export const initialData = {
  search: '',
};

export const typeDefs = gql`
  extend type Query {
    search: String!
  }

  extend type Mutation {
    setSearch(name: String!): String!
    updatePokemon(id: ID!, data: Pokemon!): null
  }
`;

export const resolvers = {
  Mutation: {
    setSearch: setSearchResolver,
    updatePokemon: updatePokemonResolver,
  }
};
