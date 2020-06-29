import React from 'react';

import { useSearchQuery, useSearchMutation } from 'Components/modules/search';
import { Flex, Input } from 'Components/ui';

function SearchByName() {
  const { search } = useSearchQuery();
  const { setSearch } = useSearchMutation();

  return (
    <Flex justify="center" marginBottom="30px">
      <Input placeholder="Busca por nome" value={search} onChange={setSearch} />
    </Flex>
  );
}

export default SearchByName;