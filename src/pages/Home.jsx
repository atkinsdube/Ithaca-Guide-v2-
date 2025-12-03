import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { categories } from "../data/categories";
import { snapshots } from "../data/snapshots";

// Build ordered snapshots for the carousel
const orderedSnapshots = [...snapshots].sort((a, b) => a.order - b.order);

function Home() {
  // Featured category names
  const featuredNames = [
    "Steps Away",
    "Food Trucks & Fast Bites",
    "Cheap Thrills (Under $10)",
    "Skill Up Saturdays",
  ];

  // Filter the categories to only include the featured ones
  const featured = categories.filter((cat) =>
    featuredNames.includes(cat.name)
  );

  return (
    <section className="home">
      <div className="hero">
        <h1>Ithaca Guide for Cornell Students</h1>
        <p className="hero-subtitle">
          Realistic, bus-friendly ways to get off campus, touch some grass, and
          actually enjoy Ithaca.
        </p>

        <div className="hero-actions">
          <Link to="/categories" className="btn primary">
            Browse All Categories
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSchBafAPVdV04Xhprkz4Hw_nGiLI53-MFTKwX_BFSvn_KfINA/viewform"
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            Give Feedback
          </a>
        </div>
      </div>

      <div className="home-section">
        <h2>Featured Categories</h2>
        <div className="card-grid">
          {featured.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className="category-card"
            >
              <h3>{cat.name}</h3>
              <p>{cat.tagline}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="home-section">
        <h2>Ithaca Snapshots</h2>
        <Carousel images={orderedSnapshots} />
      </div>
    </section>
  );
}

export default Home;
