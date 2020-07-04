import React from 'react';
import styled from 'styled-components';

import { Flex, Heading, LinkButton, Paper } from 'Components/common/ui';
import { theme } from 'Components/common/styles';
import { TypeTags } from 'Components/pokemonTypes';
import { PokemonImage } from 'Components/pokemon';

function PokemonCard({ pokemon }) {
  return (
    <Box>
      <PokemonImage image={pokemon.image} pokemonName={pokemon.name} />

      <Flex direction="column" alignItems="center" marginBottom="15px">
        <Heading>{pokemon.name}</Heading>

        <TypeTags types={pokemon.types} />

        <Flex justify="end">
          <LinkButton size="sm" children="Detalhes" to={`/pokemon/${pokemon.id}`} />
        </Flex>
      </Flex>
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
  transition: box-shadow .2s ease-in-out;

  :hover {
    box-shadow: ${theme.shadows.lg};
  }
`;

export default PokemonCard;