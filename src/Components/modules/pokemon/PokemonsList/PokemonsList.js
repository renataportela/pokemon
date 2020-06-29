import React from 'react';

import { Col, Row } from 'Components/ui';
import { useSearchQuery } from 'Components/modules/search';
import { PokemonCard, usePokemonsQuery } from 'Components/modules/pokemon';

function PokemonsList() {
  const { search } = useSearchQuery();
  const { pokemons, loading, error } = usePokemonsQuery(search);

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  if (pokemons.length === 0) {
    return (
      <div>Nenhum Pokemon encontrado.</div>
    );
  }

  return (
    <Row>
      {pokemons.map(pokemon => (
        <Col xs="12" md="6" lg="4" xl="3" key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  );
}

export default PokemonsList;