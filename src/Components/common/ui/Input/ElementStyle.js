import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { theme } from 'Components/common/styles';
import { Flex } from 'Components/common/ui/Grid';

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
  margin-right: ${theme.gutter.form};
`;

const RightSlot = styled.div`
  margin-left: ${theme.gutter.form};
`;

export const inputStyles = css`  
  display: flex;
  flex-direction: row;  
  align-items: center;
  transition: border-color .2s ease-in-out, box-shadow .2s ease;
  outline: 0;  
  border: 1px solid;  
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background-color: ${theme.colors.bg};

  ${({ $isDisabled, $hasError, $isFocused }) => css`
    cursor: ${$isDisabled ? 'not-allowed' : 'default'};
    border-color: ${$hasError 
      ? theme.colors.danger
      : ($isDisabled ? theme.colors.input.border.disabled : theme.colors.input.border.normal)
    };
    box-shadow: ${$isFocused ? theme.shadows.outline : theme.shadows.xs };
    color: ${$hasError ? theme.colors.danger : ($isDisabled ? theme.colors.disabledText : theme.colors.text)};    

    ${!$hasError && !$isDisabled && css`
    &:hover {    
      border-color: ${theme.colors.input.border.hover};
    }
    `}
  `}
`;

const InputStyle = styled(Flex)`  
  justify-content: space-between;
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