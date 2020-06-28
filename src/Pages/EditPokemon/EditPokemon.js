import React, { useEffect, useState } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemonQuery, usePokemonMutation } from 'Components/modules/pokemon';

function EditPokemon(props) {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemonQuery(pokemonId); 
  const { updatePokemon } = usePokemonMutation(pokemonId);
  const [ form, setForm ] = useState({
    name: '',
    image: '',
    types: [],
    attacks: {
      __typename: "PokemonAttack",
      fast: [],
      special: [],
    }
  });

  useEffect(() => {
    if (pokemon && pokemon.id) {
      setForm(pokemon);
    }
  }, [pokemon]);

  const handleSave = e => {
    e.preventDefault();
    updatePokemon(form);
  }

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleChangeType = currentType => e => {
    const types = [...form.types];
    const index = types.findIndex(type => type === currentType);
    types[index] = e.target.value;
    setForm({
      ...form,
      types
    });
  }

  const handleDeleteType = deletedType => () => {
    setForm({
      ...form,
      types: form.types.filter(type => type !== deletedType)
    });
  }

  const handleAddType = () => {
    setForm({
      ...form,
      types: [...form.types, '']
    });
  }

  const addNewAttack = kind => {
    setForm({
      ...form,
      attacks: {        
        ...form.attacks,
        [kind]: [
          ...form.attacks[kind],
          {
            __typename: "Attack",
            name: '',
            type: '',
            damage: ''
          }
        ]
      }
    });
  }

  const handleAddFastAttack = () => addNewAttack('fast');
  const handleAddSpecialAttack = () => addNewAttack('special');

  const handleChangeAttack = (kind, currentName) => attribute => e => {
    const attacks = {...form.attacks};
    const index = attacks[kind].findIndex(attack => attack.name === currentName);
    attacks[kind][index][attribute] = attribute === 'damage' ? parseInt(e.target.value) : e.target.value;
    setForm({
      ...form,
      attacks
    });
  };

  const handleDeleteAttack = (kind, deletedName) => () => {
    setForm({
      ...form,
      attacks: {
        ...form.attacks,
        [kind]: form.attacks[kind].filter(o => o.name !== deletedName),
      }
    });
  };

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <div>
      <h1>Editar Pokemon</h1>

      <h2>{pokemon.name}</h2>

      <form onSubmit={handleSave}>

        <input type="text" placeholder="Nome" name="name" value={form.name} onChange={handleChange} /><br />
        <input type="text" placeholder="Imagem (URL)" name="image" value={form.image} onChange={handleChange} /><br />

        {form.types.map((type, index) => (
          <div key={index}>
            <input type="text" placeholder="Tipo" value={type} onChange={handleChangeType(type)} /> 
            <button onClick={handleDeleteType(type)}>excluir</button><br />
          </div>
        ))}
        <button onClick={handleAddType}>Incluir Tipo</button><br />

        {form.attacks.fast.map((attack, index) => (
          <Attack 
            key={index} 
            attack={attack} 
            onChange={handleChangeAttack('fast', attack.name)} 
            onDelete={handleDeleteAttack('fast', attack.name)} 
          />
        ))}
        <button onClick={handleAddFastAttack}>Incluir Ataque Rápido</button><br />

        {form.attacks.special.map((attack, index) => (
          <Attack 
            key={index} 
            attack={attack} 
            onChange={handleChangeAttack('special', attack.name)} 
            onDelete={handleDeleteAttack('special', attack.name)} 
          />
        ))}
        <button onClick={handleAddSpecialAttack}>Incluir Ataque Especial</button><br />

        <button type="submit">Salvar</button>
      </form>

      <p><Link to="/">Home</Link></p>
      <p><Link to={`/pokemon/${pokemonId}`}>Voltar</Link></p>
    </div>
  );
}

function Attack({ attack, onChange, onDelete }) {
  return (
    <div>
      <input type="text" placeholder="Nome do Ataque" value={attack.name} onChange={onChange('name')} /> 
      <input type="text" placeholder="Tipo do Ataque" value={attack.type} onChange={onChange('type')} /> 
      <input type="text" placeholder="Damagem do Ataque" value={attack.damage} onChange={onChange('damage')} /> 
      <button onClick={onDelete}>excluir</button><br />
    </div>
  );
}

export default withRouter(EditPokemon);