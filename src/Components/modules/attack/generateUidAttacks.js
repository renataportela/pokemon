import uid from 'uid';

function generateUidAttacks(attacks) {
  if (!attacks) return [];
  
  return attacks.map(attack => ({
    id: uid(),
    ...attack
  }));
}

export default generateUidAttacks;