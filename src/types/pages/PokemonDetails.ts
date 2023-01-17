import { PokemonProps } from "../common/Pokemon";

export interface EvolutionsProps {
  prev_evolutions: PokemonProps[] | null;
  next_evolutions: PokemonProps[] | null;
}
