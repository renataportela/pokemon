import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { TypeTags } from 'Components/modules/pokemonType';
import { Heading, Paper } from 'Components/ui';
import { shadowLg } from 'Components/styles/shadows';
import CardImage from './CardImage';

function PokemonCard({ pokemon }) {
  return (
    <Box>
      <CardImage image={pokemon.image} alt={`Imagem de ${pokemon.name}`} />

      <div>
        <Heading>{pokemon.name}</Heading>

        <TypeTags types={pokemon.types} />

        <p><Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link></p>
      </div>
    </Box>
  );
}

const Box = styled(Paper)`
  max-width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;

  :hover {
    box-shadow: ${shadowLg};
  }
`;

export default PokemonCard;