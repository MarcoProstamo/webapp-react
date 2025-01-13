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
      .then((data) => {
        console.log(data[0].votes);

        const votes = data[0].votes.split(";");
        const names = data[0].names.split(";");
        const reviews = data[0].reviews.split(";");
        const newData = [
          { ...data[0], votes: votes, names: names, reviews: reviews },
        ];
        setMovie(newData[0]);
      })
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
          <li>
            {movie.names.map((name, index) => (
              <>
                <li>{name}</li>
                <li>{movie.votes[index]}</li>
                <li>{movie.reviews[index]}</li>
              </>
            ))}
          </li>
        </ul>
      )}
      <button onClick={() => navigate(-1)}>Back to Movies</button>
    </>
  );
}
