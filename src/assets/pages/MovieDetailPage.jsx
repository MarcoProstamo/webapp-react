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

  const initialFormData = {
    name: "",
    vote: "",
    text: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { VITE_BACKEND_URL: BACKEND_URL } = import.meta.env;

    fetch(BACKEND_URL + `/api/movies/${movieId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(BACKEND_URL + `/api/movies/${movieId}`)
          .then((res) => res.json())
          .then((data) => {
            const votes = data[0].votes.split(";");
            const names = data[0].names.split(";");
            const text = data[0].reviews.split(";");
            const reviews = [names, votes, text];
            const newData = [{ ...data[0], reviews }];
            setMovie(newData[0]);
            console.log(newData[0]);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
    setFormData(initialFormData);
  }

  return (
    movie && (
      <>
        <div className="row row-cols-2 mt-3">
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

        <div className="container my-5">
          <hr />
        </div>

        <div className="container text-center">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-end">
              <div className="col-3">
                <label htmlFor="nameInput" className="form-label">
                  Nome
                </label>
                <input
                  required
                  type="text"
                  id="nameInput"
                  className="form-control"
                  placeholder="Nome..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <label htmlFor="voteInput" className="form-label">
                  Voto
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  max="5"
                  id="voteInput"
                  className="form-control"
                  placeholder="Voto..."
                  name="vote"
                  value={formData.vote}
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <label htmlFor="textInput" className="form-label">
                  Recensione
                </label>
                <input
                  required
                  type="text"
                  id="textInput"
                  className="form-control"
                  placeholder="Recensione..."
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="container my-5">
          <hr />
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide container"
        >
          <div className="carousel-inner text-center">
            {movie &&
              movie.reviews[0].map((item, index) => (
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
          <div className="carousel-indicators position-relative">
            {movie &&
              movie.reviews[0].map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? `active` : ""}
                  aria-current="true"
                  aria-label={`Slide ${index + 1}`}
                ></button>
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
