import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from './Flex';
import { GUTTER_GRID } from 'Components/styles/spacing';

function Row({ children, noGutter, ...props }) {
  return (
    <RowStyles className={noGutter ? 'no-gutter' : ''} {...props}>
      {children}
    </RowStyles>
  );
}

const RowStyles = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${GUTTER_GRID};
  margin-left: -${GUTTER_GRID};

  &.no-gutter {
    margin-right: 0;
    margin-left: 0;
  }

  &.no-gutter > .col {
    padding-right: 0;
    padding-left: 0;
  }
`;

Row.propTypes = {
  children: PropTypes.node,
  noGutter: PropTypes.bool,
};

export default Row;
