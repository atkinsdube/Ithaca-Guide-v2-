import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          Ithaca Guide
        </Link>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            About
          </NavLink>

          <NavLink
            to="/behind-the-guide"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link-active" : "")
            }
          >
            Behind the Guide
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
