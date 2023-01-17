import { useContext } from "react";
import { PokedexContext } from "../contexts/Pokedex";

export const usePokedex = () => useContext(PokedexContext);
