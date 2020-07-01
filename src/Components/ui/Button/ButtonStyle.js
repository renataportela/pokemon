import styled, { css } from 'styled-components';

import { roundShape } from 'Components/styles/mixins';
import theme from 'Components/styles/theme';

const PADDING = {
  sm: { y: '0.3em', x: '0.75em' },
  md: { y: '0.5em', x: '1em' },
  lg: { y: '1em', x: '1.5em' },
  xl: { y: '1.1em', x: '1.6em' },
};

const ROUND_SIZES = {
  sm: '1.55rem',
  md: '2.075rem',
  lg: '2.4rem',
  xl: '3rem',
}

export const buttonVariant = props => {
  let styles = {
    backgroundColor: theme.colors.button.primary.color2,
    background: `linear-gradient(120deg, ${theme.colors.button.primary.color1} 8%, ${theme.colors.button.primary.color2} 55%)`,
    color: props.textColor || 'white',
    border: 0,
    boxShadow: theme.shadows.md,
    fontWeight: 'bold',
    '&:hover': {
      boxShadow: theme.shadows.lg,
      filter: 'saturate(1.3)'
    },
    '&:focus': {
      boxShadow: theme.shadows.outline,
    },
    '&:active': {
      boxShadow: 'none !important',
      opacity: '0.8'
    },
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
      backgroundColor: theme.colors.disabled,
    },
  };

  if (props.kind === 'secondary') {
    styles.background = theme.colors.button.secondary;
  }
  if (props.kind === 'ghost') {
    styles.background = 'transparent';
    styles.color = props.textColor || 'currentColor';
    styles.boxShadow = null;
    styles['&:hover'].backgroundColor = 'rgba(0, 0, 0, 0.08)'; 
    styles['&:hover'].boxShadow = null; 
  }
  else if (props.kind === 'glass') {
    styles.background = 'rgba(0, 0, 0, 0.38)';
    styles.boxShadow = null;
  }

  return styles;
}

export const commomCssButton = props => css`
  position: relative;
  cursor: pointer;
  outline: 0;
  white-space: nowrap;
  user-select: none;
  display: inline;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase; 
  box-sizing: border-box;
  text-rendering: auto;
  text-decoration: none;
  font-size: ${theme.fontSizes[props.size]};
  transition: all .2s ease;
`;

export const normalButtonCss = props => css`
  padding: ${PADDING[props.size].y+' '+PADDING[props.size].x};
  border-radius: .4em;
`;

const ButtonStyle = styled.button.attrs(props => ({
  $diameter: ROUND_SIZES[props.size],
}))`
  ${commomCssButton}

  & > svg {
    width: 1.1em;
    height: 1.1em;
    margin-right: ${props => props.hasLabel ? '.6em' : '0'};
  }

  ${props => css`
    ${props.round ? roundShape : normalButtonCss}
    ${buttonVariant}
  `}
`;  
  
export default ButtonStyle;