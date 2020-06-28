import React from 'react';

function AttackCard({ attack }) {
  return (
    <p>{attack.name} - {attack.type} - {attack.damage}</p>
  );
}

export default AttackCard;