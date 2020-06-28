import React from 'react';
import { Link } from 'react-router-dom';

import { TypeTags } from 'Components/modules/pokemonType';

function PokemonCard({ pokemon }) {
  return (
    <div >
      <img src={pokemon.image} alt={`Imagem de ${pokemon.name}`} />
      <h2>{pokemon.name}</h2>

      <TypeTags types={pokemon.types} />

      <p><Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link></p>
    </div>
  );
}

export default PokemonCard;