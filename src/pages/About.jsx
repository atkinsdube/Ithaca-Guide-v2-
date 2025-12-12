// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <section className="about page">
      <div className="page-section">
        <h1>About This Guide</h1>
        <p>
          This guide was created by Cornell students to help you find realistic,
          low-stress ways to explore Ithaca. It highlights off-campus options,
          TCAT-friendly routes, and things you can actually do between classes or
          on weekends.
        </p>
      </div>

      <div className="page-section">
        <h2>How to Use It</h2>
        <ul>
          <li>
            <strong>Short on time?</strong> Start with <em>Closest to Campus</em>.
          </li>
          <li>
            <strong>On a budget?</strong> Explore <em>Cheap Thrills</em>.
          </li>
          <li>
            <strong>Rainy day?</strong> Try <em>Rain-Proof Plans</em>.
          </li>
          <li>
            <strong>Autumn vibes?</strong> Browse <em>Fall Favorites</em>.
          </li>
        </ul>
      </div>

      <div className="page-section">
        <h2>Accessibility and Constraints</h2>
        <p>
          Activity cards flag distance, transit options, estimated cost, and time
          commitment so you can quickly see whether an activity fits your mobility,
          budget, and schedule.
        </p>
      </div>
    </section>
  );
}

export default About;

