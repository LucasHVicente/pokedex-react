import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PokemonDetails } from "../pages/PokemonDetails";
import { Providers } from "../providers";

export const Router = () => {
  return (
    <HashRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
          {/* 404 return to Home  */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Providers>
    </HashRouter>
  );
};
