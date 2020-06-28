import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemonQuery } from 'Components/modules/pokemon';
import { AttacksList } from 'Components/modules/attack';
import { TypeTags } from 'Components/modules/pokemonType';

function PokemonDetails() {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId);  

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <div>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.image} alt={`Imagem de ${pokemon.name}`} />

      <TypeTags types={pokemon.types} />

      {!!pokemon.attacks && <AttacksList kind="Ataques Rápidos" attacks={pokemon.attacks.fast} />}
      {!!pokemon.attacks && <AttacksList kind="Ataques Especiais" attacks={pokemon.attacks.special} />}

      <p><Link to={`/pokemon/${pokemonId}/editar`}>Editar</Link></p>

      <p><Link to="/">Voltar</Link></p>
    </div>
  );
}

export default withRouter(PokemonDetails);