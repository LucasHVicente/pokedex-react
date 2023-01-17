import { createContext } from "react";
import { PokedexContextProps } from "../types/contexts/PokedexContext";

export const PokedexContext = createContext<PokedexContextProps>({
  pokedex: [],
  numberOfEntries: 0,
  findPokemonByNumber: () => undefined,
  getEvolutions: () => [],
});
