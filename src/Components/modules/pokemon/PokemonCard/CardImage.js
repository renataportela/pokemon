import React from 'react';
import styled from 'styled-components';

function CardImage({ alt, image }) {
  return (
    <ImageContainer>
      <Image src={image} alt={alt} />
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

export default CardImage;