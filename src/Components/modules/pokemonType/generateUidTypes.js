import uid from 'uid';

function generateUidTypes(types) {
  if (!types) return [];

  return types.map(type => ({
    id: uid(),
    name: type
  }));
}

export default generateUidTypes;