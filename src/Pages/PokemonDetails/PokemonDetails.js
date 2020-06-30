import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemonQuery } from 'Components/modules/pokemon';
import { AttacksList } from 'Components/modules/attack';
import { TypeTags } from 'Components/modules/pokemonType';
import { Col, Button, Row } from 'Components/ui';

function PokemonDetails() {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId);  

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <>
      <h1>{pokemon.name}</h1>

      <TypeTags types={pokemon.types} />

      <Row>
        <Col xs="12" md="6" lg="4">
          

          <img src={pokemon.image} alt={`Imagem de ${pokemon.name}`} />
        </Col>
        <Col xs="12" md="6" lg="8">
          {!!pokemon.attacks && <AttacksList kind="Ataques Rápidos" attacks={pokemon.attacks.fast} />}
          {!!pokemon.attacks && <AttacksList kind="Ataques Especiais" attacks={pokemon.attacks.special} />}

          <div>
          <Button label="Editar" to={`/pokemon/${pokemon.id}/editar`} />
          </div>
        </Col>
        
      </Row>

      <p><Link to="/">Voltar</Link></p>
    </>
  );
}

export default withRouter(PokemonDetails);