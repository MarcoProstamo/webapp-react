import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex">
          <img width="75px" src="/logo.png" alt="logo" />
          <span className="align-self-center fs-2 fw-semibold">The Movie</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-color">
            <li>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/random">
                Random Movie
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/aboutus">
                About Us
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
