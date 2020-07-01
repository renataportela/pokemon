import React from 'react';

import { Button, DeleteButton, Flex, FormField, Heading, Input } from 'Components/ui';
import theme from 'Components/styles/theme';

function EditAttack({ title, attacks, onUpdate }) {

  const handleChange = (attribute, currentAttack) => e => {
    const _attacks = [...attacks];
    const index = _attacks.findIndex(attack => attack.name === currentAttack);
    _attacks[index][attribute] = e.target.value;
    onUpdate(_attacks);
  }

  const handleAdd = () => onUpdate([...attacks, {
    name: '',
    type: '',
    damage: '',
    __typename: "Attack",
  }]);

  const handleDelete = currentAttack => () => {
    onUpdate(attacks.filter(o => o.name !== currentAttack));
  }

  return (
    <>
      <Heading size="3">{title}</Heading>

      {attacks.map((attack, index) => {
        const { name } = attack;

        return (
          <Flex wrap="wrap" gap={theme.gutter.form} key={index}>
            <FormField 
              label="Ataque"
              inputField={<Input value={name} onChange={handleChange('name', name)} />}
            />
            <FormField 
              style={{ width: '32%' }}
              label="Tipo"
              inputField={<Input value={attack.type} onChange={handleChange('type', name)} />}
            />
            <FormField 
              label="Dano"
              inputField={(
                <Flex gap={theme.gutter.form} justify="between" alignItems="center" >
                  <Input style={{ width: '80px' }} type="number" value={attack.damage} onChange={handleChange('damage', name)} />
                  <DeleteButton onClick={handleDelete(name)} />
                </Flex>
              )}
            />
          </Flex>
        );
      })}

      <Button label="Incluir Ataque" kind="secondary" size="sm" onClick={handleAdd} />
    </>
  );
}

export default EditAttack;