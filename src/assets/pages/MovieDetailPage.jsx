import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetailPage() {
  const { id: movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { VITE_BACKEND_URL: BACKEND_URL } = import.meta.env;
  useEffect(() => {
    fetch(BACKEND_URL + `/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {movie && (
        <ul>
          <li>{movie.movie_id}</li>
          <li>{movie.title}</li>
          <li>{movie.director}</li>
          <li>{movie.genre}</li>
          <li>{movie.release_year}</li>
          <li>{movie.abstract}</li>
          <li>{movie.image}</li>
          <li>{movie.reviews}</li>
        </ul>
      )}
      <button onClick={() => navigate(-1)}>Back to Movies</button>
    </>
  );
}
