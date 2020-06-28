import React from 'react';

import useSearchFor from 'Components/pages/Pokemons/useSearchFor';

function Search() {
  const { search, setSearch } = useSearchFor();
  const handleChange = e => setSearch(e.target.value);

  return (
    <input type="text" value={search} onChange={handleChange} />
  );
}

export default Search;