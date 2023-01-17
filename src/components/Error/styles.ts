import styled from "styled-components";

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1em;
  padding: 2em;
  margin: 5em 1em;
`;
export const PokeballBgImage = styled.img`
  width: 200px;
  height: auto;
`;
