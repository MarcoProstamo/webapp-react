import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

export default function MovieDetailPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { VITE_BACKEND_URL: BACKEND_URL } = import.meta.env;
  useEffect(() => {
    fetch(BACKEND_URL + `/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        const votes = data[0].votes.split(";");
        const names = data[0].names.split(";");
        const text = data[0].reviews.split(";");
        const reviews = [names, votes, text];
        const newData = [{ ...data[0], reviews }];
        setMovie(newData[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  function starGenerate(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star =
        i < rating ? (
          <FontAwesomeIcon key={i + rating} icon={solidStar} />
        ) : (
          <FontAwesomeIcon key={i} icon={regularStar} />
        );
      stars.push(star);
    }
    return stars;
  }

  return (
    movie && (
      <>
        <div className="row row-cols-2 mt-3 pb-5">
          <Card config={{ movie, position: "end" }} />
          <div className="col-3">
            <p className="text-center fs-3 fw-semibold">{movie.title}</p>

            <p className="fs-5">{movie.abstract}</p>

            <div className="d-flex justify-content-center mt-3">
              <span className="badge text-bg-secondary">{movie.director}</span>
              <span className="badge text-bg-info mx-2">{movie.genre}</span>
              <span className="badge text-bg-warning">
                {movie.release_year}
              </span>
            </div>
          </div>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {movie &&
              movie.reviews.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <ul className="list-unstyled">
                    <li>
                      <div>
                        <div className="icon">
                          {movie.reviews[0][index].charAt(0)}
                        </div>
                        <span className="ms-3 fs-3">
                          {movie.reviews[0][index]}
                        </span>
                      </div>
                    </li>
                    <li>
                      {starGenerate(movie.reviews[1][index]).map(
                        (star) => star
                      )}
                    </li>
                    <li>{movie.reviews[2][index]}</li>
                  </ul>
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    )
  );
}
