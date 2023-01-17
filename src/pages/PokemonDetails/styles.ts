import styled from "styled-components";

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;
export const DetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 90vw;
  border-radius: 1em;
  padding: 1em;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
  }
  > div:last-child {
    border: none !important;
  }
  @media (max-width: 600px) {
    width: 95vw;
    font-size: 0.825em;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const StackedInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CandyInfo = styled.div`
  padding-top: 1em;
  flex-direction: column;
  text-align: center;
  border: none !important;
`;

export const BattleInformation = styled.div`
  padding: 1em;
  flex-direction: column;
  align-items: center;
`;

export const Weakness = styled.div`
  padding: 1em;
  padding-bottom: 0;
`;

export const PokemonPhysicalInfo = styled.div`
  padding: 1em;
  justify-content: center;
  align-items: center;
  > div {
    border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
    padding: 0 3em;
  }

  flex-wrap: wrap;
  div:last-child {
    border: none;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  border: none !important;
`;

export const PokemonEggInfo = styled.div`
  padding: 1em;
  display: flex;
  gap: 1em;
  align-items: center;
  img {
    height: 2em;
    width: auto;
  }
`;

export const SpawnInfo = styled.div`
  padding: 1em;
  flex-direction: column;
  align-items: center;
  > div {
    overflow: hidden;
    display: flex;
    justify-content: center;
    > div {
      border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
      padding: 0 3em;
      @media (max-width: 600px) {
        padding: 0 1em;
      }
    }
    div:last-child {
      border: none;
    }
  }
`;
