import React from 'react';

import { DeleteButton, Flex } from 'Components/ui';
import theme from 'Components/styles/theme';

function Deletable({ children, onClickDelete }) {
  return (
    <Flex gap={theme.gutter.form} justify="between" alignItems="center">
      {children}
      <DeleteButton onClick={onClickDelete} />
    </Flex>
  );
}

export default Deletable;