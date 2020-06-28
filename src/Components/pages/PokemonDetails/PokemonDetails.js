import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemon } from 'Components/data';

function PokemonDetails() {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemon(pokemonId);  

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <div>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.image} alt={`Imagem de ${pokemon.name}`} />

      <h2>{pokemon.name}</h2>
      <p>
        {pokemon.types.map(typeName => <span key={typeName}>{typeName} - </span>)}
      </p>

      {!!pokemon.attacks && !!pokemon.attacks.fast && pokemon.attacks.fast.map(attack => (
        <p key={attack.name}>Fast: {attack.name} - {attack.type} - {attack.damage}</p>
      ))}

      {!!pokemon.attacks && !!pokemon.attacks.special && pokemon.attacks.special.map(attack => (
        <p key={attack.name}>Special: {attack.name} - {attack.type} - {attack.damage}</p>
      ))}

      <p><Link to={`/pokemon/${pokemonId}/editar`}>Editar</Link></p>

      <p><Link to="/">Voltar</Link></p>
    </div>
  );
}

export default withRouter(PokemonDetails);