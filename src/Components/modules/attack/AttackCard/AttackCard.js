import React from 'react';
import styled from 'styled-components';

import { Paper, Text } from 'Components/ui';

function AttackCard({ attack }) {
  return (
    <Box>
      <Item bold>{attack.name}</Item> 
      <Item><strong>Tipo:</strong> {attack.type}</Item> 
      <Item><strong>Dano:</strong> {attack.damage}</Item>
    </Box>
  );
}

const Box = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled(Text)`
  flex: 1;
  padding-right: 8px;
`;

export default AttackCard;