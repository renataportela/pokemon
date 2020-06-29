import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'Components/styles/theme';

function Svg({ children, color, height, viewBox, width, ...props }) {
  return (
    <SvgStyle
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      stroke={theme.colors[color] || color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </SvgStyle>
  )
}

const SvgStyle = styled.svg`
  overflow: hidden;
  vertical-align: middle;
`;

Svg.defaultProps = {
  children: PropTypes.node,
  color: 'currentColor',
  height: '24px',
  size: null,
  strokeWidth: 2,
  width: '24px',
}

Svg.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Svg
