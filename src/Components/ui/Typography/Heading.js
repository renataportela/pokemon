import React from 'react';
import styled from 'styled-components';

import Text from './Text';

function Heading({ children, size, ...props }) {
  return (
    <HeadingStyle as={'h'+size} fontSize={size} {...props}>
      {children}
    </HeadingStyle>
  )
}

const fontSizes = {
  '1': '3.2rem',
  '2': '2.2rem',
  '3': '1.7rem',
  '4': '1.2rem',
  '5': '1.1rem',
  '6': '1rem',
}

const fontSizesMd = {
  '1': '2.8rem',
  '2': '2rem',
  '3': '1.5rem',
  '4': '1.5rem',
  '5': '1.25rem',
  '6': '1rem',
}

const HeadingStyle = styled(Text)`
  margin-top: 0;
  margin-bottom: ${props => props.noMargin ? '0' : '0.5rem'};
  font-size: ${props => fontSizesMd[props.fontSize]};

  @media (min-width: 768px) {
    font-size: ${props => fontSizes[props.fontSize]};
  }
`;

Heading.defaultProps = {
  size: '3',
  weight: 'bold',
}

export default Heading;
