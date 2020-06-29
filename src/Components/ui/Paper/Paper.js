import React from 'react';
import styled from 'styled-components';

import { resolveColor } from 'Components/styles/helpers';
import {
  shadowXs,
  shadowSm,
  shadowMd,
  shadowLg,
  shadowXl,
} from 'Components/styles/shadows';

function Paper(
  {
    children,
    bgColor = 'white',
    borderColor = 'divider',
    gutter = '15px',
    shadow = 'md',
    textColor,
    ...props
  },
  ref
) {
  return (
    <PaperStyle
      ref={ref}
      $bg={resolveColor(bgColor)}
      $color={resolveColor(textColor)}
      $border={resolveColor(borderColor)}
      gutter={gutter}
      shadow={shadow}
      {...props}
    >
      {children}
    </PaperStyle>
  )
}

const shadows = {
  xs: shadowXs,
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  xl: shadowXl,
}

const PaperStyle = styled.div(props => ({
  position: 'relative',
  boxShadow: props.shadow ? shadows[props.shadow] : null,
  backgroundColor: props.$bg,
  color: props.$color,
  padding: props.gutter,
  border: '1px solid ' + props.$border,
}));

export default React.forwardRef(Paper)
