import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../tests/utils";
import { Home } from "..";

test("should display loading", async () => {
  render(<Home />);
  const loading = screen.getByTestId("pokeball loader");
  expect(loading).toBeInTheDocument();
  const bulbasaur = await screen.findByRole("img", { name: /bulbasaur/i });
  expect(loading).not.toBeInTheDocument();
  expect(bulbasaur).toBeInTheDocument();
});

describe("search bar filter", () => {
  test("should show only searched pokemon by name", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const searchBar = await screen.findByRole("textbox");
    const searchButton = await screen.findByRole("button", { name: /search/i });

    const ivysaurCard = await screen.findByRole("img", {
      name: /ivysaur/i,
    });

    const bulbasaurCard = await screen.findByRole("img", {
      name: /bulbasaur/i,
    });

    expect(bulbasaurCard).toBeInTheDocument();

    expect(ivysaurCard).toBeInTheDocument();

    await user.clear(searchBar);
    await user.type(searchBar, "bulbasaur");
    await user.click(searchButton);

    expect(bulbasaurCard).toBeInTheDocument();

    expect(ivysaurCard).not.toBeInTheDocument();
  });

  test("should show only searched pokemon by number", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const searchBar = await screen.findByRole("textbox");
    const searchButton = await screen.findByRole("button", { name: /search/i });

    const ivysaurCard = await screen.findByRole("img", {
      name: /ivysaur/i,
    });

    const bulbasaurCard = await screen.findByRole("img", {
      name: /bulbasaur/i,
    });

    expect(bulbasaurCard).toBeInTheDocument();

    expect(ivysaurCard).toBeInTheDocument();

    await user.clear(searchBar);
    await user.type(searchBar, "002");
    await user.click(searchButton);

    expect(bulbasaurCard).not.toBeInTheDocument();

    expect(ivysaurCard).toBeInTheDocument();
  });
});
