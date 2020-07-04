import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import { Col, Heading, Link, LinkButton, Row, ScrollToTop } from 'Components/common/ui';
import { AttacksList } from 'Components/attacks';
import { TypeTags } from 'Components/pokemonTypes';
import { PokemonImage, usePokemonQuery } from 'Components/pokemon';

function PokemonDetails() {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId);  

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <>
      <ScrollToTop />

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

      <br />

      <Link to="/">Voltar</Link>
    </>
  );
}

export default withRouter(PokemonDetails);