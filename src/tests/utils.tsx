import { RenderOptions, render } from "@testing-library/react";
import { Providers } from "../providers";
import { ReactElement } from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { ProviderProps } from "../types/common/Providers";

const ProvidersWithRoutes = ({ children }: ProviderProps) => (
  <BrowserRouter>
    <Providers>{children}</Providers>
  </BrowserRouter>
);

const renderWithContext = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: ProvidersWithRoutes,
    ...options,
  });

export const renderWithRoute = (
  ui: ReactElement,
  path: string,
  initialEntries: string[],
  options?: RenderOptions
) => {
  const Wrapper = ({ children }: ProviderProps) => (
    <MemoryRouter initialEntries={initialEntries}>
      <Providers>
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </Providers>
    </MemoryRouter>
  );
  render(ui, {
    wrapper: Wrapper,
    ...options,
  });
};

export * from "@testing-library/react";

export { renderWithContext as render };
