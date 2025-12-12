// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <section className="about page">
      <div className="page-section">
        <h1>About This Guide</h1>
        <p>
          Ithaca is full of amazing things to do — but as Cornell students, it’s
          often hard to know <em>what’s realistic</em>. Long travel times, tight
          schedules, limited budgets, and unpredictable weather can make exploring
          feel overwhelming. This guide was built to solve that problem. It gathers
          student-friendly activities, shows exactly how far they are, how to get
          there, and what they cost, so you can make plans without the stress.
        </p>
      </div>

      <div className="page-section">
        <h2>How to Use It</h2>
        <p>
          Go to the <strong>Categories</strong> tab and choose a category that matches
          what you’re looking for — quick adventures, food ideas, rainy-day plans,
          workouts, crafts, seasonal favorites, and more. Each category includes details
          like distance, price, vibe, and time commitment so you can filter for what
          you need. Not sure where to start? These suggestions can help:
        </p>

        <ul>
          <li>
            <strong>Short on time?</strong> Try <em>Steps Away</em> or
            <em> One-Hour Adventures</em>.
          </li>
          <li>
            <strong>On a budget?</strong> Browse <em>Cheap Thrills (Under $10)</em>.
          </li>
          <li>
            <strong>Rainy day?</strong> Head to <em>Rain-Proof Plans</em>.
          </li>
          <li>
            <strong>Want nature?</strong> Explore <em>Touch Some Grass</em>.
          </li>
          <li>
            <strong>Weekend skill-building?</strong> Check <em>Skill Up Saturdays</em>.
          </li>
        </ul>
      </div>

      <div className="page-section">
        <h2>Accessibility and Constraints</h2>
        <p>
          Every activity card lists distance, transit options, price range, and time
          needed — helping you quickly decide whether an activity fits your mobility,
          budget, energy level, and schedule. Our goal is simple: make exploring Ithaca
          easier, lighter, and more accessible for everyone.
        </p>
      </div>

      <div className="page-section">
        <h2>More Information</h2>
        <p>
          For more information about the guide, the team behind it, and how this
          project came together, visit the <strong>Behind the Guide</strong> page.
        </p>
      </div>
    </section>
  );
}

export default About;
