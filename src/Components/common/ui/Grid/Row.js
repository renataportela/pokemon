import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from 'Components/common/styles';
import Flex from './Flex';

function Row({ children, noGutter, ...props }) {
  return (
    <RowStyles className={noGutter ? 'no-gutter' : ''} {...props}>
      {children}
    </RowStyles>
  );
}

const RowStyles = styled(Flex)`
  flex-wrap: wrap;
  margin-right: -${theme.gutter.grid};
  margin-left: -${theme.gutter.grid};

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
