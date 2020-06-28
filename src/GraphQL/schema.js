import gql from 'graphql-tag';
import { setSearchFor } from 'Components/pages/Pokemons/Search/useSetSearchFor';
import { updatePokemon } from 'Components/pages/EditPokemon/useSetPokemon';

export const initialData = {
  searchFor: '',
};

export const typeDefs = gql`
  extend type Query {
    searchFor: String!
  }

  extend type Mutation {
    setSearchFor(name: String!): String!
  }
`;

export const resolvers = {
  Mutation: {
    setSearchFor,
    updatePokemon,  
  }
};
