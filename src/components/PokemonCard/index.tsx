import { Link } from "react-router-dom";
import { PokemonCardProps } from "../../types/components/PokemonCard";
import { TypeTag } from "../TypeTag";
import {
  CardContainer,
  EntryNumber,
  PokemonData,
  PokemonImage,
  PokemonName,
  TypesContainer,
} from "./styles";

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Link to={`pokemon/${pokemon.num}`}>
      <CardContainer>
        <PokemonImage src={pokemon.img} alt={pokemon.name} />
        <PokemonData>
          <EntryNumber>#{pokemon.num}</EntryNumber>
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesContainer>
            {pokemon.type.map((type) => (
              <TypeTag key={`${pokemon.id}-${type}`} type={type} />
            ))}
          </TypesContainer>
        </PokemonData>
      </CardContainer>
    </Link>
  );
};
