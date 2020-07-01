import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import theme from 'Components/styles/theme';
import ElementStyle from './ElementStyle';

function Input({
  disabled,
  error,
  fill,
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
  const handleChange = e => onChange(e.target.value, e);

  return (
    <ElementStyle
      $hasError={error}
      $isDisabled={disabled}
      $isFocused={isFocused}
      left={left}
      right={right}
      fill={fill}
    >
      <InputStyle
        $hasError={error}
        disabled={disabled}
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
      color: ${$hasError ? theme.colors.danger : (disabled ? theme.colors.disabledText : theme.colors.placeholder)};
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
