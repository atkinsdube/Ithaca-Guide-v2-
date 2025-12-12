// src/App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BehindTheGuide from "./pages/BehindTheGuide";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="app-shell">
      <Router basename={import.meta.env.BASE_URL}>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="navbar-inner">
            <div className="navbar-logo">Ithaca Guide</div>

            <nav className="navbar-links">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
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

        {/* MAIN CONTENT */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />          {/* ✅ list view */}
            <Route path="/categories/:slug" element={<CategoryPage />} />  {/* ✅ detail view */}
            <Route path="/about" element={<About />} />
            <Route path="/behind-the-guide" element={<BehindTheGuide />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-text">
              Built by Cornell students for Cornell students.
            </p>
            <p className="footer-text subtle">
              Fall 2025 · ENGRC 3500 Ithaca Guide Project
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
