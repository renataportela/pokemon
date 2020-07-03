import gql from 'graphql-tag';
import { setSearchResolver } from 'Components/modules/search';
import { updatePokemonResolver } from 'Components/modules/pokemon';

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
