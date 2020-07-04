import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Paper, Text } from 'Components/common/ui';

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

AttackCard.propTypes = {
  attack: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    damage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
};

export default AttackCard;