import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  border-radius: 0.5em;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 600px) {
    width: 150px;
    font-size: 0.825em;
  }
`;

export const EntryNumber = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  width: min-content;
  padding-right: 5em;
  padding-left: 0.5em;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-right-radius: 1em;
  font-size: 1em;
  margin-top: -1em;
  margin-left: -0.75em;
`;

export const PokemonName = styled.span`
  font-size: 1.5em;
  white-space: nowrap;
`;

export const PokemonImage = styled.img`
  border-radius: 0.5em;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.cardImageBg};
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;
export const PokemonData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  padding-top: 0;
  gap: 0.75em;
`;
export const TypesContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;
