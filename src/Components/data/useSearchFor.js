import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function useGetSearchFor() {
  const { loading, error, data } = useQuery(GET_SEARCH_POKEMON);

  return { 
    search: !!data ? data.searchFor : '', 
    loading, 
    error 
  };
}

const GET_SEARCH_POKEMON = gql`
  query {
    searchFor @client
  }
`;

export default useGetSearchFor;