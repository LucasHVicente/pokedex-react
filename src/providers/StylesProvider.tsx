import { ThemeProvider } from "styled-components";
import { PokedexHeader } from "../components/PokedexHeader";
import { useState } from "react";
import { darkTheme, pokedexTheme } from "../styles/themes";
import { GlobalStyle } from "../styles/global";
import { StylesProviderProps } from "../types/providers/StylesProvider";

export const StylesProvider = ({ children }: StylesProviderProps) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? pokedexTheme : darkTheme}>
      <GlobalStyle />
      <PokedexHeader theme={theme} setTheme={setTheme} />
      {children}
    </ThemeProvider>
  );
};
