import React, { forwardRef } from 'react';

import { Icon } from 'Components/ui';
import ButtonStyle from './ButtonStyle';

/*
 * Loading é controlado pelo usuário
 * Submitting é controlado pelo componente Form
 */
function Button(
  {
    disabled = false,
    icon = null,
    label = null,
    loading = false,
    size = 'md',
    submitting = false,
    kind = 'primary',
    type = 'button',
    ...props
  },
  ref
) {
  return (
    <ButtonStyle
      type={type}
      disabled={disabled || loading || submitting}
      hasLabel={!!label}
      kind={kind}
      size={size}
      ref={ref}
      {...props}
    >
      {icon && !loading && <Icon name={icon} />}
      {(loading || submitting) && <Icon name="loader" color="white" />}
      {label}
    </ButtonStyle>
  )
}

export default forwardRef(Button)
