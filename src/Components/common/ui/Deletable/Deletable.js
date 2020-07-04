import React from 'react';

import { theme } from 'Components/common/styles';
import { DeleteButton, Flex } from 'Components/common/ui';

function Deletable({ children, onClickDelete }) {
  return (
    <Flex gap={theme.gutter.form} justify="between" alignItems="center">
      {children}
      <DeleteButton onClick={onClickDelete} />
    </Flex>
  );
}

export default Deletable;