import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  NavigateButton,
  PokemonImage,
  PokemonNavigationContainer,
} from "./styles";
import { useNavigate } from "react-router";
import { PokemonDetailsProps } from "../../types/components/PokemonDetailsNavigation";
import { usePokedex } from "../../hooks/usePokedex";

export const PokemonDetailsNavigation = ({ pokemon }: PokemonDetailsProps) => {
  const navigate = useNavigate();
  const { lastPokedexEntry } = usePokedex();
  function handleNextPokemon(num: number) {
    navigate(`/pokemon/${num + 1}`);
  }

  function handlePrevPokemon(num: number) {
    navigate(`/pokemon/${num - 1}`);
  }
  return (
    <PokemonNavigationContainer>
      <NavigateButton
        aria-label="previous pokemon"
        onClick={() => handlePrevPokemon(parseInt(pokemon.num))}
        disabled={parseInt(pokemon?.num) <= 1}
      >
        <IoIosArrowBack size={20} />
      </NavigateButton>
      <PokemonImage src={pokemon.img} alt={pokemon.name} />
      <NavigateButton
        aria-label="next pokemon"
        onClick={() => handleNextPokemon(parseInt(pokemon.num))}
        disabled={parseInt(pokemon?.num) >= lastPokedexEntry}
      >
        <IoIosArrowForward size={20} />
      </NavigateButton>
    </PokemonNavigationContainer>
  );
};
