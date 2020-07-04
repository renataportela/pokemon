import React from 'react';
import styled from 'styled-components';

import { theme } from 'Components/common/styles';

function Paper({ children, gutter = '15px', ...props }, ref) {
  return (
    <PaperStyle ref={ref} {...props}>
      {children}
    </PaperStyle>
  )
}

const PaperStyle = styled.div`
  position: relative;
  background-color: ${theme.colors.bg};
  padding: ${theme.spacing.md};
  border: ${theme.border.divider}; 
  box-shadow: ${theme.shadows.sm}; 
`;

export default React.forwardRef(Paper)
