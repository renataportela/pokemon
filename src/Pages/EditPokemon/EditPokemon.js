import React, { useEffect, useState } from 'react';
import { Redirect, useParams, withRouter } from 'react-router-dom';

import { Heading, Link, ScrollToTop } from 'Components/common/ui';
import { usePokemonQuery, usePokemonMutation } from 'Components/pokemon';
import { generateUidAttacks } from 'Components/attacks';
import { generateUidTypes } from 'Components/pokemonTypes';
import { PokemonForm } from 'Components/pokemon';

function EditPokemon() {
  const [isUpdated, setIsUpdated] = useState(false);
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId); 
  const { updatePokemon } = usePokemonMutation(pokemonId);
  const [ form, setForm ] = useState(null);

  useEffect(() => {
    if (pokemon && pokemon.id && form === null) {
      const pokemonData = {...pokemon};

      pokemonData.types = generateUidTypes(pokemonData.types);

      ['fast', 'special'].forEach(kind => {
        pokemonData.attacks[kind] = generateUidAttacks(pokemonData.attacks[kind]);
      });

      setForm(pokemonData);
    }
  }, [pokemon, form]);

  const handleSave = e => {
    e.preventDefault();
    const { types, ...pokemonData } = form;

    pokemonData.types = form.types.map(o => o.name);

    updatePokemon(pokemonData);
    setIsUpdated(true);
  }

  const updateField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  }

  const goBackRoute = `/pokemon/${pokemonId}`;

  if (loading || form === null) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;
  if (isUpdated) return <Redirect to={goBackRoute} />;

  return (
    <div>
      <ScrollToTop />
      
      <Heading textAlign="center" size="1">Editar Pokemon</Heading>

      <PokemonForm 
        heading={<Heading size="3">{pokemon.name}</Heading>}
        form={form}
        onChangeField={updateField}
        onSubmitForm={handleSave} 
      />

      <br />

      <Link to={goBackRoute}>Voltar</Link>
    </div>
  );
}

export default withRouter(EditPokemon);