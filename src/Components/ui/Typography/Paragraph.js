import React from 'react';
import styled from 'styled-components';

import Text from './Text';

function Paragraph(props) {
  return (
    <PStyle forwardedAs="p" {...props} />
  )
}

const PStyle = styled(Text)`
  margin-bottom: 0.8rem;
`;

export default Paragraph;
