import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';

import { usePokemonQuery, usePokemonMutation } from 'Components/modules/pokemon';
import { EditTypes } from 'Components/modules/pokemonType';
import { EditAttacks } from 'Components/modules/attack';
import { Button, Col, Flex, FormField, Heading, Input, Link, Row } from 'Components/ui';

function EditPokemon() {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId); 
  const { updatePokemon } = usePokemonMutation(pokemonId);
  const [ form, setForm ] = useState(null);

  useEffect(() => {
    if (pokemon && pokemon.id && form === null) {
      setForm(pokemon);
    }
  }, [pokemon, form]);

  const handleSave = e => {
    e.preventDefault();
    updatePokemon(form);
  }

  const updateForm = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  }

  const handleChange = (value, e) => updateForm(e.target.name, value );
  const handleChangeTypes = types => updateForm('types', types);
  const handleChangeAttacks = kind => updatedAttacks => {
    updateForm('attacks', {
      ...form.attacks,
      [kind]: updatedAttacks
    });
  }

  if (loading || form === null) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;  

  return (
    <div>
      <Heading textAlign="center" size="1">Editar Pokemon</Heading>

      <form onSubmit={handleSave}>
        <Row justify="center">
          <Col xs="12" lg="6">
            <Heading size="3">{pokemon.name}</Heading>

            <FormField 
              label="Nome" 
              inputField={<Input name="name" value={form.name} onChange={handleChange} />} 
            />

            <FormField 
              label="Imagem (URL)" 
              inputField={<Input name="image" value={form.image} onChange={handleChange} />} 
            />

            <br />

            <EditTypes types={form.types} onUpdate={handleChangeTypes} />
          </Col>
          <Col xs="12" lg="6">

            <EditAttacks 
              title="Ataques Rápidos" 
              attacks={form.attacks && form.attacks.fast ? form.attacks.fast : []} 
              onUpdate={handleChangeAttacks('fast')} 
            />

            <EditAttacks 
              title="Ataques Especiais" 
              attacks={form.attacks && form.attacks.special ? form.attacks.special : []} 
              onUpdate={handleChangeAttacks('special')} 
            />
          </Col>
        </Row>

        <br />

        <Flex justify="center">
          <Button type="submit" label="Salvar" />
        </Flex>
      </form>

      <p><Link to={`/pokemon/${pokemonId}`}>Voltar</Link></p>
    </div>
  );
}

export default withRouter(EditPokemon);