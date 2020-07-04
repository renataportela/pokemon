import React from 'react';
import styled from 'styled-components';

import { theme } from 'Components/common/styles';

function Label(props) {
  const color = props.hasError 
    ? theme.colors.danger 
    : props.isDisabled ? theme.colors.disabledText : theme.colors.label;

  return <LabelStyle htmlFor={props.htmlFor} $textColor={color} children={props.children} />
}

const LabelStyle = styled.label`
  color: ${props => props.$textColor};
  font-weight: bold;
  margin-bottom: 0.2rem;
  padding-left: 0.2rem;
  font-size: 0.9rem;
`;

export default Label;