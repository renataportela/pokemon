import Pokemons from 'Components/pages/Pokemons';
import Pokemon from 'Components/pages/PokemonDetails';
import EditPokemon from 'Components/pages/EditPokemon';

export default [
  { 
    path: '/pokemon/:id', 
    component: Pokemon,
    exact: true,
  },
  {
    path: '/pokemon/:id/editar',
    component: EditPokemon,
    exact: true,
  },
  { 
    path: '/', 
    component: Pokemons 
  },
];
