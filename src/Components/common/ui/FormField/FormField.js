import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { theme } from 'Components/common/styles';
import { Label } from 'Components/common/ui';
import { Flex } from 'Components/common/ui/Grid';
import Message from './FormFieldMessage';

function FormField({
  error,
  help,
  inputField,
  label,
  ...props
}) {
  const hasError = !!error;
  const disabled = inputField.props.disabled;
  
  const cloneInput = React.cloneElement(inputField, {
    error: hasError,
  });

  return (
    <Outer {...props}>
      {label && <Label htmlFor={props.inputField.name} hasError={hasError} isDisabled={disabled}>{label}</Label>}
      {cloneInput}
      {hasError && <Message kind="error">{error}</Message>}
      {!!help && <Message kind="hint">{help}</Message>}
    </Outer>
  )
}

export const gutterMixin = props => props.gutter && css`
  padding-right: ${theme.gutter.form};
  padding-left: ${theme.gutter.form};
`

const Outer = styled(Flex).attrs(() => ({
  direction: 'column',
}))`
  margin-bottom: ${theme.gutter.form};
  ${gutterMixin}
`

FormField.displayName = 'FormField';

FormField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
}

export default FormField;