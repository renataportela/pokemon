import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading } from 'Components/common/ui';
import { AttackCard } from 'Components/attacks';

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

AttacksList.propTypes = {
  kind: PropTypes.string,
  attacks: PropTypes.arrayOf(AttackCard.propTypes.attack),
};

export default AttacksList;