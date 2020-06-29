import React, { useEffect, useState } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemonQuery, usePokemonMutation } from 'Components/modules/pokemon';
import { EditTypes } from 'Components/modules/pokemonType';
import { EditAttacks } from 'Components/modules/attack';

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

  const handleChange = e => updateForm(e.target.name, e.target.value );
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
      <h1>Editar Pokemon</h1>

      <h2>{pokemon.name}</h2>

      <form onSubmit={handleSave}>
        <input type="text" placeholder="Nome" name="name" value={form.name} onChange={handleChange} /><br />
        <input type="text" placeholder="Imagem (URL)" name="image" value={form.image} onChange={handleChange} /><br />

        <EditTypes types={form.types} onUpdate={handleChangeTypes} />

        <br />

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

        <br />

        <button type="submit">Salvar</button>
      </form>

      <p><Link to="/">Home</Link></p>
      <p><Link to={`/pokemon/${pokemonId}`}>Voltar</Link></p>
    </div>
  );
}

export default withRouter(EditPokemon);