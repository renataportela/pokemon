import { gql } from 'apollo-boost';

export const POKEMON_DATA = gql`
  fragment PokemonData on Pokemon {
    id
    name
    image
    types
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
`;