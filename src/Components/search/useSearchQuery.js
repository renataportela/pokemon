import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function useSearchQuery() {
  const { loading, error, data } = useQuery(GET_SEARCH_POKEMON);

  return { 
    search: !!data ? data.search : '', 
    loading, 
    error 
  };
}

export const GET_SEARCH_POKEMON = gql`
  {
    search @client
  }
`;

export default useSearchQuery;