import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.image} alt={`Imagem de ${pokemon.name}`} />
      <h2>{pokemon.name}</h2>
      <p>
        {pokemon.types.map(typeName => <span key={typeName}>{typeName} - </span>)}
      </p>

      <p><Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link></p>
    </div>
  );
}

export default PokemonCard;