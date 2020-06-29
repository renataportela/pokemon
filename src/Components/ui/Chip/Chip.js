import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { textBgColors } from 'Components/styles/mixins';

function Chip({ children, ...props}) {
  return (
    <ChipStyle {...props}>
      <Content>{children}</Content>
    </ChipStyle>
  )
}

const ChipColors = styled.span(textBgColors);
const ChipStyle = styled(ChipColors)`
  border-radius: 1.1rem;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  outline: none;
  cursor: default;
`;

const Content = styled.span`
  padding: 0.2rem 0.5rem;
`;

Chip.defaultProps = {
  bgColor: 'sub',
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
}

export default Chip