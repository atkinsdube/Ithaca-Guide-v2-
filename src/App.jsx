// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CategoriesIndex from "./pages/CategoriesIndex.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import BehindTheGuide from "./pages/BehindTheGuide.jsx";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* All categories list */}
          <Route path="/categories" element={<CategoriesIndex />} />

          {/* Dynamic category route: /categories/closest-to-campus etc */}
          <Route path="/categories/:slug" element={<CategoryPage />} />

          {/* Behind the Guide page */}
          <Route path="/behind-the-guide" element={<BehindTheGuide />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
