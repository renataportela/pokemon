import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import { usePokemonQuery } from 'Components/modules/pokemon';
import { AttacksList } from 'Components/modules/attack';
import { TypeTags } from 'Components/modules/pokemonType';
import { PokemonImage } from 'Components/modules/pokemon';
import { Col, Heading, Link, LinkButton, Row } from 'Components/ui';

function PokemonDetails() {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId);  

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <>
      <Heading textAlign="center" size="1">{pokemon.name}</Heading>

      <TypeTags types={pokemon.types} justify="center" />

      <Row>
        <Col xs="12" md="6" lg="4">
          <PokemonImage image={pokemon.image} pokemonName={pokemon.name} />
        </Col>
        <Col xs="12" md="6" lg="8">
          {!!pokemon.attacks && <AttacksList kind="Ataques Rápidos" attacks={pokemon.attacks.fast} />}
          {!!pokemon.attacks && <AttacksList kind="Ataques Especiais" attacks={pokemon.attacks.special} />}

          <div>
          <LinkButton children="Editar" to={`/pokemon/${pokemon.id}/editar`} />
          </div>
        </Col>
        
      </Row>

      <Link to="/">Voltar</Link>
    </>
  );
}

export default withRouter(PokemonDetails);