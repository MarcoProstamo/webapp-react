import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layout/DefaultLayout";
import HomePage from "./assets/pages/HomePage";
import AboutUsPage from "./assets/pages/AboutUsPage";
import MoviesPage from "./assets/pages/MoviesPage";
import RandomPage from "./assets/pages/RandomPage";
import MovieDetailPage from "./assets/pages/MovieDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="random" element={<RandomPage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
