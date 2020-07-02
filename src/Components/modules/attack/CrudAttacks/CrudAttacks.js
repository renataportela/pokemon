import React from 'react';
import styled from 'styled-components';
import uid from 'uid';

import { Button, Col, Deletable, FormField, Heading, Input, Row, Section } from 'Components/ui';

function EditAttack({ title, attacks, onChangeAttacks }) {

  const handleChange = (attribute, id) => value => {
    const _attacks = [...attacks];
    const index = _attacks.findIndex(attack => attack.id === id);
    _attacks[index][attribute] = value;
    onChangeAttacks(_attacks);
  }

  const handleAdd = () => onChangeAttacks([...attacks, {
    id: uid(),
    name: '',
    type: '',
    damage: '',
    __typename: "Attack",
  }]);

  const handleDelete = id => () => {
    onChangeAttacks(attacks.filter(o => o.id !== id));
  }

  return (
    <Section>
      <Heading size="3">{title}</Heading>

      {attacks.map(attack => {
        const { id } = attack;

        return (
          <RowResponsive key={id}>
            <Col xs="12" sm="5">
              <FormField 
                label="Ataque"
                inputField={<Input value={attack.name} onChange={handleChange('name', id)} />}
              />
            </Col>

            <Col xs="12" sm="4">
              <FormField 
                label="Tipo"
                inputField={<Input value={attack.type} onChange={handleChange('type', id)} />}
              />
            </Col>

            <Col xs="12" sm="3">
              <FormField 
                label="Dano"
                inputField={(
                  <Deletable onClickDelete={handleDelete(id)}>
                    <Input type="number" value={attack.damage} onChange={handleChange('damage', id)} />
                  </Deletable>
                )}
              />
            </Col>
          </RowResponsive>
        );
      })}

      <Button label="Incluir Ataque" kind="secondary" size="sm" onClick={handleAdd} />
    </Section>
  );
}

const RowResponsive = styled(Row)`
  margin-bottom: 30px;

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export default EditAttack;