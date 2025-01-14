import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
export default function MoviesPage() {
  const { VITE_BACKEND_URL: BACKEND_URL } = import.meta.env;
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetch(BACKEND_URL + "/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center fw-semibold mb-3">Movies</h1>
      <div className="row row-cols-5 gap-5">
        {movies &&
          movies.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Card config={{ movie, position: "center" }} />
            </Link>
          ))}
      </div>
    </div>
  );
}
