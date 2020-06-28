import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function useSearchFor() {
  const [ searchPokemon ] = useMutation(SET_SEARCH_POKEMON);

  return { 
    setSearch: name => searchPokemon({ variables: { name }}),
  };
}

const SET_SEARCH_POKEMON = gql`
  mutation setSearchFor($name: String!) {
    setSearchFor(name: $name) @client
  }
`;

export function setSearchFor(_, { name }, { cache }) {
  cache.writeData({ data: { searchFor: name } });
  return name;
}

export default useSearchFor;