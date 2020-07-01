import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import theme from 'Components/styles/theme';
import { Label } from 'Components/ui';
import { Flex } from 'Components/ui/Grid';
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
      {label && <Label hasError={hasError} isDisabled={disabled}>{label}</Label>}
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