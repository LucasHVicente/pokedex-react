import { useParams } from "react-router";
import { usePokedex } from "../../hooks/usePokedex";
import { useEffect, useState } from "react";
import { PokemonProps } from "../../types/common/Pokemon";
import {
  BattleInformation,
  CandyInfo,
  DetailsContainer,
  Label,
  PokemonContainer,
  PokemonEggInfo,
  PokemonPhysicalInfo,
  SpawnInfo,
  StackedInformation,
  TypesContainer,
  Weakness,
} from "./styles";

import { TypeTag } from "../../components/TypeTag";
import PokemonEgg from "../../assets/pokemonEgg.png";
import { PokeballLoader } from "../../components/PokeballLoader";
import { PokemonDetailsNavigation } from "../../components/PokemonDetailsNavigation";
import { PokemonEvolutions } from "../../components/PokemonEvolutions";

export const PokemonDetails = () => {
  const { id } = useParams();
  const { findPokemonByNumber } = usePokedex();
  const [pokemon, setPokemon] = useState<PokemonProps>();

  function getPokemonData() {
    console.log("id: ", id);
    const pokedexEntry = findPokemonByNumber(id);
    setPokemon(pokedexEntry);
  }

  useEffect(() => {
    getPokemonData();
  }, [id]);

  if (!pokemon) return <PokeballLoader />;

  return (
    <PokemonContainer>
      <PokemonDetailsNavigation pokemon={pokemon} />
      <DetailsContainer>
        <span>#{pokemon.num}</span>
        <h2>{pokemon.name}</h2>
        <TypesContainer>
          {pokemon.type.map((type) => (
            <TypeTag key={`${pokemon.id}-${type}`} type={type} />
          ))}
        </TypesContainer>
        <PokemonPhysicalInfo>
          <StackedInformation>
            <span>{pokemon.height}</span>
            <Label>Height</Label>
          </StackedInformation>
          <StackedInformation>
            <span>{pokemon.weight}</span>
            <Label>Weight</Label>
          </StackedInformation>
        </PokemonPhysicalInfo>
        <CandyInfo>
          {pokemon.candy_count ? (
            <>
              <span>{pokemon.candy_count}</span>
              <Label>{pokemon.candy} to evolve</Label>
            </>
          ) : (
            <Label>Can't evolve any further</Label>
          )}
        </CandyInfo>
        <BattleInformation>
          <h3>Weakness</h3>
          <Weakness>
            <TypesContainer>
              {pokemon.weaknesses.map((weakness) => (
                <TypeTag
                  key={`weakness-${pokemon.id}-${weakness}`}
                  type={weakness}
                />
              ))}
            </TypesContainer>
          </Weakness>
        </BattleInformation>

        <SpawnInfo>
          <h3>Spawn Information</h3>
          <PokemonEggInfo>
            <img src={PokemonEgg} />
            <span>{pokemon.egg}</span>
          </PokemonEggInfo>
          <div>
            <StackedInformation>
              <span>{pokemon.avg_spawns}</span>
              <Label>Average spawns</Label>
            </StackedInformation>
            <StackedInformation>
              <span>{pokemon.spawn_time}</span>
              <Label>Spawn Time</Label>
            </StackedInformation>
            <StackedInformation>
              <span>{(pokemon.spawn_chance * 100).toFixed(2)}%</span>
              <Label>Spawn Chance</Label>
            </StackedInformation>
          </div>
        </SpawnInfo>
        <PokemonEvolutions pokemon={pokemon} />
      </DetailsContainer>
    </PokemonContainer>
  );
};
