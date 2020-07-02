import React from 'react';

import { Button, Col, Flex, FormField, Input, Row, Section } from 'Components/ui';
import { CrudAttacks } from 'Components/modules/attack';
import { CrudTypes } from 'Components/modules/pokemonType';

function PokemonForm({ heading, form, onChangeField, onSubmitForm }) {
  const handleChange = (value, e) => onChangeField(e.target.name, value );
  const handleChangeTypes = types => onChangeField('types', types);
  const handleChangeAttacks = kind => updatedAttacks => {
    onChangeField('attacks', {
      ...form.attacks,
      [kind]: updatedAttacks
    });
  }

  return (
    <form onSubmit={onSubmitForm}>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs="12" md="8" lg="6">
          {heading}
          
          <Section>    
            <FormField 
              label="Nome" 
              inputField={<Input name="name" value={form.name} onChange={handleChange} />} 
            />
            <FormField 
              label="Imagem (URL)" 
              inputField={<Input name="image" value={form.image} onChange={handleChange} />} 
            />
          </Section>
          
          <CrudTypes types={form.types} onChangeTypes={handleChangeTypes} />

          <CrudAttacks 
            title="Ataques Rápidos" 
            attacks={form.attacks && form.attacks.fast ? form.attacks.fast : []} 
            onChangeAttacks={handleChangeAttacks('fast')} 
          />

          <CrudAttacks 
            title="Ataques Especiais" 
            attacks={form.attacks && form.attacks.special ? form.attacks.special : []} 
            onChangeAttacks={handleChangeAttacks('special')} 
          />
        </Col>
      </Row>

      <br />

      <Flex justify="center">
        <Button type="submit" label="Salvar" />
      </Flex>
    </form>
  );
}

export default PokemonForm;