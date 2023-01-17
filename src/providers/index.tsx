import { ProviderProps } from "../types/common/Providers";
import { PokedexProvider } from "./PokedexProvider";
import { StylesProvider } from "./StylesProvider";

export const Providers = ({ children }: ProviderProps) => {
  return (
    <StylesProvider>
      <PokedexProvider>{children}</PokedexProvider>
    </StylesProvider>
  );
};
