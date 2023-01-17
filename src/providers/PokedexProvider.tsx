import { useEffect, useState } from "react";
import { PokedexProviderProps } from "../types/providers/PokedexProvider";
import { PokemonProps } from "../types/common/Pokemon";
import { api } from "../services";
import { PokedexContext } from "../contexts/Pokedex";
import { PokeballLoader } from "../components/PokeballLoader";
import { ErrorMessage } from "../components/Error";

export const PokedexProvider = ({ children }: PokedexProviderProps) => {
  const [pokedex, setPokedex] = useState<PokemonProps[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchPokedex() {
    try {
      setLoading(true);
      const res = await api.get(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      setPokedex(res.data.pokemon);
      setLoading(false);
    } catch (err) {
      setError("Unable to get Pokédex data");
    }
  }

  function findPokemonByNumber(number: any) {
    try {
      const pokemon = pokedex.find(
        (pokemon) => parseInt(pokemon.num) === parseInt(number)
      );
      if (!pokemon) throw new Error();
      return pokemon;
    } catch (err) {
      console.log(err);
      setError("This pokémon has not been discovered yet.");
    }
  }
  function getEvolutions(evolutions: string[]) {
    return pokedex.filter((pokemon) => evolutions.includes(pokemon.num));
  }
  useEffect(() => {
    fetchPokedex();
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
        numberOfEntries: pokedex.length,
        findPokemonByNumber,
        getEvolutions,
      }}
    >
      {error ? (
        <ErrorMessage message={error} />
      ) : loading ? (
        <PokeballLoader />
      ) : (
        children
      )}
    </PokedexContext.Provider>
  );
};
