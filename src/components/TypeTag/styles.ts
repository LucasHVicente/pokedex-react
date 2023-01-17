import styled from "styled-components";
import { TypeTagProps } from "../../types/components/TypeTag";

export const TypeTagContainer = styled.span<TypeTagProps>`
  background-color: ${({ theme, type }) =>
    theme.colors.types[type.toLowerCase()]};
  width: min-content;
  padding: 0.25em 1.75em;
  border-radius: 0.5em;
  font-size: 0.75em;
  font-family: sans-serif;
  color: #fff;
  overflow: visible !important;
`;
