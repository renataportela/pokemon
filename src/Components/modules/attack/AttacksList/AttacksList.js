import React from 'react';
import styled from 'styled-components';

import { AttackCard } from 'Components/modules/attack';
import { Heading } from 'Components/ui';

function AttacksList({ kind, attacks }) {
  if (attacks.length === 0) return null;

  return (
    <Outer>
      <Heading size="3">{kind}</Heading>
      
      {attacks.map((attack, index) => (
        <AttackCard key={index} attack={attack} />
      ))}
    </Outer>
  );
}

const Outer = styled.div`
  margin-bottom: 28px;
`;

export default AttacksList;