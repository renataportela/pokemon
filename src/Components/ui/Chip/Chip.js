import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'Components/styles/theme';

function Chip({ children, ...props}) {
  return (
    <ChipStyle {...props}>
      <Content>{children}</Content>
    </ChipStyle>
  )
}

const ChipStyle = styled.span`
  border-radius: 1.1rem;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  outline: none;
  cursor: default;
  background-color: ${theme.colors.sub};
`;

const Content = styled.span`
  padding: 0.2rem 0.5rem;
`;

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
}

export default Chip