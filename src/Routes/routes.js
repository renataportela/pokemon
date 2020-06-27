import Pokemons from 'Components/pages/Pokemons';
import Pokemon from 'Components/pages/Pokemon';
import EditPokemon from 'Components/pages/EditPokemon';

export default [
  { 
    path: '/pokemon', 
    component: Pokemon,
    exact: true,
  },
  {
    path: '/pokemon/editar',
    component: EditPokemon,
    exact: true,
  },
  { 
    path: '/', 
    component: Pokemons 
  },
];
