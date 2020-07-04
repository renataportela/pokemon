import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme} from 'Components/common/styles';

function Alert({ children, kind, ...props}) {
  return (
    <AlertStyle $bgColor={kind} {...props}>
      {children}
    </AlertStyle>
  )
}

const AlertStyle = styled.div`
  background-color: ${props => theme.colors[props.$bgColor] || theme.colors.sub};
  padding: .7em .9em;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  text-align: left;
  color: white;
`;

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['danger', 'info']).isRequired,
}

export default Alert;