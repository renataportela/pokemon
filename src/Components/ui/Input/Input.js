import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ElementStyle from './ElementStyle';
import { COLORS } from 'Components/styles/colors';

function Input({
  isDisabled,
  hasError,
  left,
  right,
  rows,
  type,
  onChange,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = e => onChange(e.target.value);

  return (
    <ElementStyle
      $hasError={hasError}
      $isDisabled={isDisabled}
      $isFocused={isFocused}
      left={left}
      right={right}
    >
      <InputStyle
        $hasError={hasError}
        disabled={isDisabled}
        as={!!rows ? 'textarea' : null}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
    </ElementStyle>
  )
}

const InputStyle = styled.input`
  outline: 0;
  flex: 1;
  border: 0;
  background-color: transparent;
  padding: .7rem .8rem;
  font-size: 1.02rem;
  color: currentColor;
  cursor: inherit;

  ${({ disabled, $hasError }) => css`
    &::placeholder {
      color: ${$hasError ? COLORS['danger'] : (disabled ? COLORS['disabledText'] : COLORS['subText'])};
    }
  `}
`

Input.defaultProps = {
  type: 'text',
  value: '',
}

Input.propTypes = {
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Input;
