import styled from "styled-components";
import pokeballBg from "../../assets/pokeball-bg.png";

export const PokemonNavigationContainer = styled.div`
  z-index: 1;
`;

export const NavigateButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 1em;
  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const PokemonImage = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: -100px;
  background: url(${pokeballBg});
  background-size: 300px;

  @media (max-width: 750px) {
    height: 200px;
    width: 200px;
    background-size: 200px;
  }
`;
