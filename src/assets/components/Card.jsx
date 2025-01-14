export default function Card({ config }) {
  const { movie, position } = config;
  return (
    <>
      <div className={`col d-flex justify-content-${position}`} id="movie-col">
        <img src={movie.image} className="card-img" alt={movie.title} />
      </div>
    </>
  );
}
