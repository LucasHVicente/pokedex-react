import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EvolutionsProps } from "../../types/pages/PokemonDetails";
import { usePokedex } from "../../hooks/usePokedex";
import { EvolutionsContainer } from "./styles";
import { PokemonEvolutionsProps } from "../../types/components/PokemonEvolutions";

export const PokemonEvolutions = ({ pokemon }: PokemonEvolutionsProps) => {
  const [evolutions, setEvolutions] = useState<EvolutionsProps>();
  const { getEvolutions } = usePokedex();
  useEffect(() => {
    let evo: EvolutionsProps = {
      next_evolutions: null,
      prev_evolutions: null,
    };
    if (pokemon?.next_evolution) {
      evo.next_evolutions = getEvolutions(
        pokemon?.next_evolution.map((evolution) => evolution.num)
      );
    }
    if (pokemon?.prev_evolution) {
      evo.prev_evolutions = getEvolutions(
        pokemon?.prev_evolution.map((evolution) => evolution.num)
      );
    }
    setEvolutions(evo);
  }, [pokemon]);

  return (
    <EvolutionsContainer>
      {evolutions?.prev_evolutions && (
        <div>
          <h3>
            Previous evolution{evolutions.prev_evolutions.length > 1 && "s"}
          </h3>
          {evolutions.prev_evolutions.map((evolution) => (
            <Link key={`evo-${evolution.id}`} to={`/pokemon/${evolution.num}`}>
              <img src={evolution.img} alt={evolution.name} />
            </Link>
          ))}
        </div>
      )}
      {evolutions?.next_evolutions && (
        <div>
          <h3>Next evolution{evolutions.next_evolutions.length > 1 && "s"}</h3>
          {evolutions.next_evolutions.map((evolution) => (
            <Link key={`evo-${evolution.id}`} to={`/pokemon/${evolution.num}`}>
              <img src={evolution.img} alt={evolution.name} />
            </Link>
          ))}
        </div>
      )}
    </EvolutionsContainer>
  );
};
