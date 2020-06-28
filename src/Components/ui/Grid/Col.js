import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Flex from './Flex';
import { GUTTER_GRID } from 'Components/styles/spacing';

function Col({ children, ...props }) {
  return (
    <ColStyle className="col" {...props}>
      {children}
    </ColStyle>
  );
}

const colSizes = {
  '0': '0',
  '1': '8.333333%',
  '2': '16.666667%',
  '3': '25%',
  '4': '33.333333%',
  '5': '41.666667%',
  '6': '50%',
  '7': '58.333333%',
  '8': '66.666667%',
  '9': '75%',
  '10': '83.333333%',
  '11': '91.666667%',
  '12': '100%',
};

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mediaQuery = (breakpoint, props) => {
  if (!props[breakpoint]) return '';
  const colSize = props[breakpoint];
  const width = colSizes[colSize];

  return css`
    @media (min-width: ${breakpoints[breakpoint]}px) {
      flex: 0 0 ${width};
      max-width: ${width};
      ${props.offset &&
      props.offset[breakpoint] &&
      css`
        margin-left: ${colSizes[props.offset[breakpoint]]};
      `}
    }
  `;
};

const sm = props => mediaQuery('sm', props);
const md = props => mediaQuery('md', props);
const lg = props => mediaQuery('lg', props);
const xl = props => mediaQuery('xl', props);

const ColStyle = styled(Flex)`
  position: relative;
  min-height: 1px;
  padding-right: ${GUTTER_GRID};
  padding-left: ${GUTTER_GRID};
  width: auto;
  ${({ col, xs }) =>
    col
      ? css`
          max-width: ${colSizes[col]};
          flex: 0 0 ${colSizes[col]};
        `
      : css`
          max-width: ${xs ? colSizes[xs] : '100%'};
          flex: 1 1 ${xs ? colSizes[xs] : 'auto'};
        `}

  ${sm}
  ${md}
  ${lg}
  ${xl}

  ${props =>
    props.hiddenDown &&
    css`
      @media (max-width: ${breakpoints[props.hiddenDown]}px) {
        display: none;
      }
    `}

  ${props =>
    props.hiddenUp &&
    css`
      @media (min-width: ${breakpoints[props.hiddenUp]}px) {
        display: none;
      }
    `} 
`;

Col.defaultProps = {
  hiddenDown: null,
  hiddenUp: null,
};

Col.propTypes = {
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignItems: PropTypes.string,
  hiddenDown: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  hiddenUp: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default Col;
