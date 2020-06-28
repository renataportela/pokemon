import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function useSearchMutation() {
  const [ setSearch ] = useMutation(SET_SEARCH_POKEMON);

  return { 
    setSearch: name => setSearch({ variables: { name }}),
  };
}

const SET_SEARCH_POKEMON = gql`
  mutation setSearch($name: String!) {
    setSearch(name: $name) @client
  }
`;

export function setSearchResolver(_, { name }, { cache }) {
  cache.writeData({ data: { search: name } });
  return name;
}

export default useSearchMutation;