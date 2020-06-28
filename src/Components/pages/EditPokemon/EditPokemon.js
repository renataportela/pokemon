import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';

import { usePokemon } from 'Components/data';
import useSetPokemon from './useSetPokemon';

function EditPokemon(props) {
  const { pokemonId } = useParams();
  const { pokemon, loading, error } = usePokemon(pokemonId); 
  const { setPokemon } = useSetPokemon(pokemonId);

  const handleSave = () => {
    setPokemon({
      id: pokemonId,
      name: 'Teste',
    })
  }

  if (loading) return 'Carregando...';
  if (error) return `Ocorreu um erro: ${error}`;

  return (
    <div>
      <h1>Editar Pokemon</h1>

      <h2>{pokemon.name}</h2>

      <button onClick={handleSave}>Salvar</button>

      <p><Link to="/">Pokemons</Link></p>
      <p><Link to="/pokemon">Pokemon</Link></p>
    </div>
  );
}

export default withRouter(EditPokemon);