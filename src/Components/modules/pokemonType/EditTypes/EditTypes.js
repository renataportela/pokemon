import React from 'react';

import { Button, DeleteButton, Flex, FormField, Heading, Input } from 'Components/ui';
import theme from 'Components/styles/theme';

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
        <FormField 
          key={index}
          label="Descrição"
          inputField={(
            <Flex gap={theme.gutter.form} justify="between" alignItems="center">
              <Input fill value={type} onChange={handleChange(type)} />
              <DeleteButton onClick={handleDelete(type)} />
            </Flex>
          )}
        />
      ))}
      <Button kind="secondary" size="sm" label="Incluir Tipo" onClick={handleAdd} /><br />
    </>
  );
}

export default EditTypes;