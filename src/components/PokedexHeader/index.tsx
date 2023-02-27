import { Link } from "react-router-dom";
import {
  PokedexHeaderContainer,
  PokedexTitle,
  ToggleThemeButton,
} from "./styles";

import { CiLight, CiDark } from "react-icons/ci";
import { PokedexHeaderProps } from "../../types/components/PokedexHeader";

export const PokedexHeader = ({ theme, setTheme }: PokedexHeaderProps) => {
  function handleToggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <PokedexHeaderContainer data-testid="header">
      <Link to="/">
        <PokedexTitle>Pokédex</PokedexTitle>
      </Link>
      <ToggleThemeButton
        aria-label={`change theme`}
        onClick={handleToggleTheme}
      >
        {theme === "light" ? <CiLight /> : <CiDark />}
      </ToggleThemeButton>
    </PokedexHeaderContainer>
  );
};
