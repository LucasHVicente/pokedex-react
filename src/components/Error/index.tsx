import { ErrorMessageContainer, PokeballBgImage } from "./styles";
import PokeballBG from "../../assets/pokeball-bg.png";

export const ErrorMessage = ({ message = "An error ocurred." }: any) => {
  return (
    <ErrorMessageContainer>
      <PokeballBgImage src={PokeballBG} />
      <h2>Error</h2>
      <h3>{message}</h3>
    </ErrorMessageContainer>
  );
};
