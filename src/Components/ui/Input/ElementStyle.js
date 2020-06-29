import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { shadowXs, shadowOutline } from 'Components/styles/shadows';
import { COLORS } from 'Components/styles/colors';

function ElementStyle({ children, left, right, ...props }) {
  return (
    <InputStyle {...props}>
      {left && <LeftSlot>{left}</LeftSlot>}
      {children}
      {right && <RightSlot>{right}</RightSlot>}
    </InputStyle>
  );
}

const LeftSlot = styled.div`
  margin-right: 8px;
`;

const RightSlot = styled.div`
  margin-left: 8px;
`;

export const inputStyles = css`
  display: flex;
  flex-direction: row;  
  align-items: center;
  transition: border-color .2s ease-in-out, box-shadow .2s ease;
  outline: 0;  
  border: 1px solid;  
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background-color: white;

  ${({ $isDisabled, $hasError, $isFocused }) => css`
    cursor: ${$isDisabled ? 'not-allowed' : 'default'};
    border-color: ${$hasError 
      ? COLORS['danger']
      : ($isDisabled ? '#f0f0f0' : '#80bdff')
    };
    box-shadow: ${$isFocused ? shadowOutline : shadowXs };
    color: ${$hasError ? COLORS['danger'] : ($isDisabled ? COLORS['disabled'] : '#000')};    

    ${!$hasError && !$isDisabled && css`
    &:hover {    
      border-color: #559eed;
    }
    `}
  `}
`;

const InputStyle = styled.div`  
  justify-content: space-between;
  position: relative;
  border-radius: 4px;  
  ${inputStyles}  
`

ElementStyle.propTypes = {
  $colors: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  $isFocused: PropTypes.bool,
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default ElementStyle