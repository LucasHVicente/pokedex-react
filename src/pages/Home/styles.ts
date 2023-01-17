import styled from "styled-components";

export const PokemonListContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 1.5em;
  @media (max-width: 600px) {
    font-size: 0.825em;
    margin: 0 1em;
  }
`;

export const SearchBarContainer = styled.div`
  color: #f2f2f2;
  background-color: #313131;
  padding: 2em;
  padding-bottom: 1em;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);
  h2 {
    font-weight: 300;
  }
  div {
    display: flex;
    gap: 0.5em;
  }
`;

export const SearchInput = styled.input`
  font-size: 1.5em;
  @media (max-width: 400px) {
    font-size: 1.25em;
  }
`;

export const SearchButton = styled.button`
  border-radius: 0.5em;
  height: 3em;
  width: 3em;
  background-color: #ee6b2f;
  color: #fff;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
