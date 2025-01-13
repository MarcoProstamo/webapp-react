import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
