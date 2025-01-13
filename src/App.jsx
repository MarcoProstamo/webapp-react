import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layout/DefaultLayout";
import HomePage from "./assets/pages/HomePage";
import AboutUsPage from "./assets/pages/AboutUsPage";
import MoviesPage from "./assets/pages/MoviesPage";
import RandomPage from "./assets/pages/RandomPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/">
            <Route index Component={HomePage} />
            <Route path="/aboutus" Component={AboutUsPage} />
            <Route path="/movies" Component={MoviesPage} />
            <Route path="/random" Component={RandomPage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
