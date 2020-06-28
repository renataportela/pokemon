import React, { useEffect, useState } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemon } from 'Components/data';
import useUpdatePokemon from './useUpdatePokemon';

function EditPokemon(props) {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemon(pokemonId); 
  const { updatePokemon } = useUpdatePokemon(pokemonId);
  const [ form, setForm ] = useState({
    name: '',
    image: '',
    types: [],
    attacks: []
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

        <button type="submit">Salvar</button>
      </form>

      <p><Link to="/">Home</Link></p>
      <p><Link to={`/pokemon/${pokemonId}`}>Voltar</Link></p>
    </div>
  );
}

export default withRouter(EditPokemon);