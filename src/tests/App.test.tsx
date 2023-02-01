import { rest } from "msw";
import { server } from "../mocks/server";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("should display error message on api error", async () => {
  server.resetHandlers(
    rest.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
      (req, res, ctx) => res(ctx.status(500))
    )
  );
  render(<App />);
  const errorMessage = await screen.findByRole("heading", {
    name: /Unable to get Pokédex data/i,
  });
  expect(errorMessage).toBeInTheDocument();
});

test("should toggle theme", async () => {
  const user = userEvent.setup();
  render(<App />);

  const pokedexTitle = await screen.findByRole("heading", { name: /pokédex/i });
  const headerContainer = await screen.findByTestId("header");
  const themeButton = await screen.findByRole("button", {
    name: /change theme/i,
  });

  expect(headerContainer).toHaveStyle("background-color: rgb(255, 255, 255)");
  expect(pokedexTitle).toHaveStyle("color: #313131");

  await user.click(themeButton);

  expect(headerContainer).toHaveStyle("background-color: rgb(66, 66, 66)");
  expect(pokedexTitle).toHaveStyle("color: #f2f2f2");
});
