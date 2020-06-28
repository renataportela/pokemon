import Pokemons from 'Pages/Pokemons';
import Pokemon from 'Pages/PokemonDetails';
import EditPokemon from 'Pages/EditPokemon';

export default [
  { 
    path: '/pokemon/:pokemonId', 
    component: Pokemon,
    exact: true,
  },
  {
    path: '/pokemon/:pokemonId/editar',
    component: EditPokemon,
    exact: true,
  },
  { 
    path: '/', 
    component: Pokemons 
  },
];
