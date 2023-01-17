import { TypeTagProps } from "../../types/components/TypeTag";
import { TypeTagContainer } from "./styles";

export const TypeTag = ({ type }: TypeTagProps) => (
  <TypeTagContainer type={type}>{type}</TypeTagContainer>
);
