import React from 'react';

import { Button, Col, Flex, FormField, Heading, Input, Link, Row } from 'Components/ui';

function EditTypes({ types, onUpdate }) {

  const handleChange = currentType => e => {
    const _types = [...types];
    const index = _types.findIndex(type => type === currentType);
    _types[index] = e.target.value;
    onUpdate(_types);
  };

  const handleDelete = currentType => () => onUpdate(types.filter(type => type !== currentType));

  const handleAdd = () => onUpdate([...types, '']);

  return (
    <>
      <Heading size="3">Tipos</Heading>

      {types && types.map((type, index) => (
        <div key={index}>
          <button type="button" onClick={handleDelete(type)}>excluir</button>
          <input type="text" placeholder="Tipo" value={type} onChange={handleChange(type)} /> <br />
        </div>
      ))}
      <button type="button" onClick={handleAdd}>Incluir Tipo</button><br />
    </>
  );
}

export default EditTypes;