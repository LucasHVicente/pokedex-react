import userEvent from "@testing-library/user-event";
import { PokemonDetails } from "..";
import { renderWithRoute, screen } from "../../../tests/utils";

test("should display error message if pokemon data is not found", async () => {
  renderWithRoute(<PokemonDetails />, "/pokemon/:id", ["/pokemon/152"]);

  const errorMessage = await screen.findByRole("heading", {
    name: /this pokémon has not been discovered yet./i,
  });
  expect(errorMessage).toBeInTheDocument();
});

describe("pokemon details navigation", () => {
  test("change to next pokémon", async () => {
    const user = userEvent.setup();
    renderWithRoute(<PokemonDetails />, "/pokemon/:id", ["/pokemon/001"]);
    const nextButton = await screen.findByRole("button", {
      name: /next pokemon/i,
    });
    const bulbasaur = await screen.findByRole("heading", {
      name: /bulbasaur/i,
    });
    expect(bulbasaur).toBeInTheDocument();

    await user.click(nextButton);

    const ivysaur = await screen.findByRole("heading", {
      name: /ivysaur/i,
    });
    expect(ivysaur).toBeInTheDocument();
  });

  test("can't navigate to pokemon with entry number lesser than entry 001", async () => {
    renderWithRoute(<PokemonDetails />, "/pokemon/:id", ["/pokemon/001"]);

    const prevButton = await screen.findByRole("button", {
      name: /previous pokemon/i,
    });
    expect(prevButton).toBeDisabled();
  });

  test("can't navigate to pokemon with entry number further than entry 151", async () => {
    renderWithRoute(<PokemonDetails />, "/pokemon/:id", ["/pokemon/151"]);

    const nextButton = await screen.findByRole("button", {
      name: /next pokemon/i,
    });
    expect(nextButton).toBeDisabled();
  });

  test("navigate to pokémon evolution", async () => {
    const user = userEvent.setup();
    renderWithRoute(<PokemonDetails />, "/pokemon/:id", ["/pokemon/001"]);
    const venusaurEvolution = await screen.findByRole("img", {
      name: /venusaur/i,
    });
    const bulbasaur = await screen.findByRole("heading", {
      name: /bulbasaur/i,
    });
    expect(bulbasaur).toBeInTheDocument();

    await user.click(venusaurEvolution);

    const venusaur = await screen.findByRole("heading", {
      name: /venusaur/i,
    });
    expect(venusaur).toBeInTheDocument();
  });
});
