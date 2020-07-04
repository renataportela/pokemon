import React from 'react';
import styled from 'styled-components';

import { Input } from 'Components/common/ui';
import { useSearchQuery, useSearchMutation } from 'Components/search';

function SearchByName() {
  const { search } = useSearchQuery();
  const { setSearch } = useSearchMutation();

  return (
    <Outer>
      <Input 
        placeholder="Busca por nome" 
        value={search} 
        onChange={setSearch} 
      />
    </Outer>
  );
}

const Outer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & > div {
    width: 300px;
    max-width: 100%;
  }
`;

export default SearchByName;