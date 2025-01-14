export default function Card({ config }) {
  const { title, image } = config;
  return (
    <>
      <div className="col d-flex justify-content-center" id="movie-col">
        <img src={image} className="card-img" alt={title} />
      </div>
    </>
  );
}
