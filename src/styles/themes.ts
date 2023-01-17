import { PokedexThemeProps } from "../types/styles/PokedexTheme";

export const pokedexTheme: PokedexThemeProps = {
  colors: {
    background: "#FFF",
    text: "#313131",
    secondaryText: "#828482",
    cardImageBg: "#f2f2f2",
    types: {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
    },
  },
};

export const darkTheme: PokedexThemeProps = {
  colors: {
    ...pokedexTheme.colors,
    background: "#424242",
    text: "#F2F2F2",
    secondaryText: "#f2f2f2",
    cardImageBg: "#555",
  },
};
