import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function useSearchFor() {
  const { loading, error, data } = useQuery(GET_SEARCH_POKEMON);
  const [ searchPokemon ] = useMutation(SET_SEARCH_POKEMON);

  return { 
    search: !!data ? data.searchFor : '', 
    setSearch: name => searchPokemon({ variables: { name }}),
    loading, 
    error 
  };
}

const GET_SEARCH_POKEMON = gql`
  query {
    searchFor @client
  }
`;

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