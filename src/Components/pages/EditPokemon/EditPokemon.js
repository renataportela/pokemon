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

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <div>
      <h1>Editar Pokemon</h1>

      <h2>{pokemon.name}</h2>

      <form onSubmit={handleSave}>

        <input placeholder="Nome" name="name" value={form.name} onChange={handleChange} /><br />
        <input placeholder="Imagem (URL)" name="image" value={form.image} onChange={handleChange} /><br />

        <button type="submit">Salvar</button>
      </form>

      <p><Link to="/">Home</Link></p>
      <p><Link to={`/pokemon/${pokemonId}`}>Voltar</Link></p>
    </div>
  );
}

export default withRouter(EditPokemon);