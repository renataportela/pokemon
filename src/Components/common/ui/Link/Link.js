import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from 'Components/common/styles';

function RouteLink(props) {
  return <LinkStyled to={props.to} children={props.children} />
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