import React from 'react';
import uid from 'uid';

import { Button, Deletable, FormField, Heading, Input, Section } from 'Components/common/ui';

function CrudTypes({ types, onChangeTypes }) {

  const handleChange = id => value => {
    const _types = [...types];
    const index = _types.findIndex(type => type.id === id);
    _types[index].name = value;
    onChangeTypes(_types);
  };

  const handleDelete = deletedId => () => onChangeTypes(types.filter(type => type.id !== deletedId));

  const handleAdd = () => onChangeTypes([...types, { id: uid(), name: '' }]);

  return (
    <Section>
      <Heading size="3">Tipos</Heading>

      {types && types.map(type => (
        <FormField 
          key={type.id}
          label="Descrição"
          inputField={(
            <Deletable onClickDelete={handleDelete(type.id)}>
              <Input fill value={type.name} onChange={handleChange(type.id)} />
            </Deletable>
          )}
        />
      ))}
      <Button kind="secondary" size="sm" label="Incluir Tipo" onClick={handleAdd} />
    </Section>
  );
}

export default CrudTypes;