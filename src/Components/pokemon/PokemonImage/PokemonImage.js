import React from 'react';
import styled from 'styled-components';

function PokemonImage({ pokemonName, image, ...props }) {
  return (
    <ImageContainer {...props}>
      <Image src={image} alt={`Imagem de ${pokemonName}`} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 8px 0 15px;
`;

export default PokemonImage;