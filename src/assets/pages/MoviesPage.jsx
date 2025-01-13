import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <ul>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
