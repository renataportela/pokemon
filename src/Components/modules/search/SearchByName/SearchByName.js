import React from 'react';

import { useSearchQuery, useSearchMutation } from 'Components/modules/search';

function SearchByName() {
  const { search } = useSearchQuery();
  const { setSearch } = useSearchMutation();
  const handleChange = e => setSearch(e.target.value);

  return (
    <input type="text" placeholder="Busca por nome" value={search} onChange={handleChange} />
  );
}

export default SearchByName;