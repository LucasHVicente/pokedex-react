import styled from "styled-components";

export const PokedexTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5em;
  padding-left: 1em;
  font-weight: 300;
`;
export const PokedexHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
`;
export const ToggleThemeButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: none;
  font-size: 2em;
  padding: 0 1em;
  :hover {
    cursor: pointer;
  }
`;
