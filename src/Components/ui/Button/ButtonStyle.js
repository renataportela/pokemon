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
  box-sizing: border-box;
  text-rendering: auto;
  text-decoration: none;
  font-size: ${theme.fontSizes[props.size]};
  transition: all .2s ease;
  font-weight: bold;
  border: 0;

  &:focus {
    box-shadow: ${theme.shadows.outline};
  }

  &:active {
    box-shadow: none !important;
    opacity: 0.8;
  }

  &:disabled {
    cursor: 'not-allowed';
    box-shadow: none;
    background-color: ${theme.colors.disabled};
  }
`;

export const normalButtonCss = props => css`
  padding: ${PADDING[props.size].y+' '+PADDING[props.size].x};
  border-radius: .4em;
`;

export const primaryVariant = css`
  background-color: ${theme.colors.button.primary.bgColor2};
  background: linear-gradient(120deg, ${theme.colors.button.primary.bgColor1} 8%, ${theme.colors.button.primary.bgColor2} 55%);
  color: ${theme.colors.button.primary.textColor};
  box-shadow: ${theme.shadows.md};
  text-transform: uppercase;

  :hover {
    box-shadow: ${theme.shadows.lg};
    filter: saturate(1.3);
  }
`;

const secondaryVariant = props => css`
  background-color: ${theme.colors.button.secondary.bgColor};
  color: ${theme.colors.button.secondary.textColor};
  color: ${!!props.textColor ? theme.colors[props.textColor] : theme.colors.button.secondary.textColor};

  :hover {
    filter: saturate(3);
  }
`;

const ghostVariant = props => css`
  background-color: transparent;
  color: ${!!props.textColor ? theme.colors[props.textColor] : theme.colors.button.secondary.textColor};

  :hover::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: .18;
    background-color: currentColor;
  }
`;

const ButtonStyle = styled.button.attrs(props => ({
  $diameter: ROUND_SIZES[props.size],
}))`
  ${commomCssButton}

  ${props => css`
    ${props.round ? roundShape : normalButtonCss}
    ${props.kind === 'primary' && primaryVariant}
    ${props.kind === 'secondary' && secondaryVariant}
    ${props.kind === 'ghost' && ghostVariant}
  `}

  & > svg {
    width: 1.1em;
    height: 1.1em;
    margin-right: ${props => props.hasLabel ? '.6em' : '0'};
    stroke: currentColor;
  }
`;  
  
export default ButtonStyle;