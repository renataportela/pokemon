import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from 'Components/styles/theme';

function RouteLink(props) {
  return <LinkStyled {...props} />
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.link};
  outline: none;
  transition: color .2s ease-in;

  :hover {
    text-decoration: underline;
    color: ${theme.colors.linkHover};
  }

  :focus {
    box-shadow: ${theme.shadows.outline};
  }
`;

export default RouteLink;