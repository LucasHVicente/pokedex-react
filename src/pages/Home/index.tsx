import { useState } from "react";
import { PokemonProps } from "../../types/common/Pokemon";
import { PokemonCard } from "../../components/PokemonCard";
import {
  PokemonListContainer,
  SearchBarContainer,
  SearchButton,
  SearchInput,
} from "./styles";
import { usePokedex } from "../../hooks/usePokedex";
import { FiSearch } from "react-icons/fi";
export const Home = () => {
  const { pokedex } = usePokedex();

  const [displayedPokemon, setDisplayedPokemon] =
    useState<PokemonProps[]>(pokedex);

  const [searchTerm, setSearchTerm] = useState("");

  function filterPokemon() {
    const filteredPokedex = pokedex.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm) ||
        pokemon.num.toLowerCase().includes(searchTerm)
    );
    setDisplayedPokemon(filteredPokedex);
  }

  return (
    <div>
      <SearchBarContainer>
        <h2>Name or Number</h2>
        <div>
          <SearchInput
            placeholder="Search for Pokémon"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <SearchButton aria-label="search" onClick={filterPokemon}>
            <FiSearch size={20} />
          </SearchButton>
        </div>
      </SearchBarContainer>
      <PokemonListContainer>
        {displayedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonListContainer>
    </div>
  );
};
