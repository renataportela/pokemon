import React from 'react';

import { useSearchFor } from 'Components/data';
import useSetSearchFor from './useSetSearchFor';

function Search() {
  const { search } = useSearchFor();
  const { setSearch } = useSetSearchFor();
  const handleChange = e => setSearch(e.target.value);

  return (
    <input type="text" value={search} onChange={handleChange} />
  );
}

export default Search;