import { PokemonProps } from "../common/Pokemon";

export interface PokedexContextProps {
  pokedex: PokemonProps[];
  lastPokedexEntry: number;
  findPokemonByNumber: (number: any) => PokemonProps | undefined;
  getEvolutions: (evolutions: string[]) => PokemonProps[] | [];
}
