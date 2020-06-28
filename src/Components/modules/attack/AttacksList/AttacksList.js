import React from 'react';

import { AttackCard } from 'Components/modules/attack';

function AttacksList({ kind, attacks }) {
  if (attacks.length === 0) return null;

  return (
    <>
      <h3>{kind}</h3>
      
      {attacks.map(attack => (
        <AttackCard key={attack.name} attack={attack} />
      ))}
    </>
  );
}

export default AttacksList;