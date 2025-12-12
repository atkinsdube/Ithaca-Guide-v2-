// src/pages/BehindTheGuide.jsx
import React from "react";

function BehindTheGuide() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="behind-guide page">
      {/* INTRODUCTION */}
      <div className="page-section">
        <h1>Behind the Ithaca Guide</h1>
        <p>
          This project was created for ENGRC 3500 (Fall 2025) to address a key
          challenge facing Cornell students. Many students struggle to find clear,
          consolidated, low-stress information about things to do in Ithaca. Our
          goal was to build a student-centered, accessible, and practical resource
          that supports wellbeing and belonging.
        </p>
      </div>

      {/* PROBLEM STATEMENT */}
      <div className="page-section">
        <h2>Problem Statement</h2>
        <p>
          First-year students often struggle to find reliable, student-relevant
          information about activities in the Ithaca area and on campus. Existing
          resources such as blogs, Reddit threads, tourism websites, and scattered
          university pages are fragmented and inconsistent. As a result, planning
          something simple to do between classes can become stressful, time
          consuming, and overwhelming.
        </p>
      </div>

      {/* BACKGROUND */}
      <div className="page-section">
        <h2>Background and History</h2>
        <p>
          Cornell welcomes thousands of new students each year, all adjusting to a
          new academic and social environment. Research on student transitions
          highlights the importance of informational support, which refers to clear,
          accessible guidance about how to navigate campus life and nearby
          communities. When this support is difficult to find, students may
          experience uncertainty, isolation, and information overload.
        </p>
        <p>
          Although Cornell offers some event information, resources that describe
          the broader Ithaca area often lack important student-centered details such
          as distance from campus, transit options, cost, and realistic time
          requirements. Students must gather information from multiple sources, a
          process that increases cognitive load and discourages exploration.
        </p>
        <p>
          The Ithaca Guide attempts to solve this problem by consolidating
          information into a single, structured, easy-to-use resource tailored
          specifically for Cornell students. It is intentionally designed so that
          students can scan it quickly and make simple decisions between classes.
        </p>
      </div>

      {/* CONSTRAINTS AND SCOPE */}
      <div className="page-section">
        <h2>Project Constraints and Scope</h2>

        <h3>Constraints</h3>
        <ul>
          <li>Students often have only 45 to 90 minute breaks.</li>
          <li>Most undergraduates rely on walking or TCAT transportation.</li>
          <li>Many students prefer free or low-cost activities.</li>
          <li>Ithaca weather limits outdoor options during much of the year.</li>
          <li>The guide focuses on activities that are open to the public.</li>
        </ul>

        <h3>Scope</h3>
        <p>
          <strong>This guide includes:</strong>
        </p>
        <ul>
          <li>Walkable or TCAT-accessible off-campus activities</li>
          <li>Free or budget-friendly experiences</li>
          <li>Weather-based categories such as Rain-Proof Plans and Fall Favorites</li>
          <li>Realistic timing estimates and quick-scan information</li>
        </ul>

        <p>
          <strong>This guide does not include:</strong>
        </p>
        <ul>
          <li>Bars, clubs, or nightlife</li>
          <li>Full restaurant reviews</li>
          <li>Restricted or student-only events</li>
          <li>Irregular seasonal pop-up activities</li>
        </ul>
      </div>

      {/* DIRECTIONS WITH FIGURES */}
      <div className="page-section">
        <h2>How to Use the Guide</h2>
        <p>
          This guide is designed for quick scanning and low-stress decision making.
          The steps below outline how a student might use it during a short break
          between classes. Figures 1 through 3 show the main views.
        </p>

        <ol>
          <li>
            <strong>Begin on the homepage (Fig. 1).</strong> The homepage explains
            the purpose of the guide and provides quick access to all categories,
            plus a set of featured playlists.
          </li>
          <li>
            <strong>Open the categories page (Fig. 2).</strong> From the navigation
            or homepage button, browse curated playlists such as Closest to Campus,
            Food Trucks and Fast Bites, Cheap Thrills (Under 10 Dollars), and Skill
            Up Saturdays.
          </li>
          <li>
            <strong>Scan activity cards within a category (Fig. 2).</strong> Cards
            display distance, transit method, estimated cost, and time needed so
            students can compare options easily.
          </li>
          <li>
            <strong>Open an individual activity page (Fig. 3).</strong> This page
            expands on the card with a fuller description, details about access and
            weather, and instructions for getting there.
          </li>
        </ol>

        <h3>Requirements and Assumptions</h3>
        <ul>
          <li>A phone or laptop with internet access</li>
          <li>A TCAT pass included in the Cornell student fee</li>
          <li>Comfortable walking shoes for most activities</li>
        </ul>

        {/* FIGURE 1 */}
        <figure className="figure">
          <img
            src={`${base}images/homepage-screenshot.jpeg`}
            alt="Ithaca Guide homepage showing hero text and featured categories"
          />
          <figcaption>
            <strong>Fig. 1.</strong> The homepage of the Ithaca Guide. This view
            introduces the site and provides direct access to browsing all
            categories, along with featured playlists that help students begin
            exploring quickly.
          </figcaption>
        </figure>

        {/* FIGURE 2 */}
        <figure className="figure">
          <img
            src={`${base}images/categories-page.jpeg`}
            alt="Categories page displaying Ithaca Guide playlists"
          />
          <figcaption>
            <strong>Fig. 2.</strong> The categories view. Each card represents a
            playlist built around a specific student constraint such as distance,
            cost, or time. This layout supports fast comparison and navigation.
          </figcaption>
        </figure>

        {/* FIGURE 3 */}
        <figure className="figure">
          <img
            src={`${base}images/activity-page.jpeg`}
            alt="Example activity page with distance, cost, and transit details"
          />
          <figcaption>
            <strong>Fig. 3.</strong> An individual activity page. This view offers
            more detail than the card, including access notes and suggested
            transportation. It helps students decide whether an activity fits their
            energy level, time availability, and budget.
          </figcaption>
        </figure>
      </div>

      {/* TEAM */}
      <div className="page-section">
        <h2>Team Member Biographies</h2>

        <div className="team-grid">
          <div className="team-member">
            <img
              src={`${base}images/team/cassidy.jpg`}
              alt="Portrait of Cassidy Xu"
              className="team-photo"
            />
            <h3>Cassidy Xu</h3>
            <p>
              Cassidy is a first-semester junior majoring in Computer Science.
              She contributed to UX structure, card formatting, and navigation
              design to make the guide easy to scan and accessible on both phones
              and laptops.
            </p>
          </div>

          <div className="team-member">
            <img
              src={`${base}images/team/atkins.jpg`}
              alt="Portrait of Atkins Dube"
              className="team-photo"
            />
            <h3>Atkins Dube</h3>
            <p>
              Atkins is a first-semester senior majoring in Operations Research.
              He worked on categorization logic, site flow, and how constraints
              such as time, cost, and transit appear on activity cards.
            </p>
          </div>

          <div className="team-member">
            <img
              src={`${base}images/team/will.jpg`}
              alt="Portrait of William Manno"
              className="team-photo"
            />
            <h3>William Manno</h3>
            <p>
              Will is a first-semester senior majoring in Chemical Engineering.
              He refined category groupings, stylistic consistency, and the tone
              of descriptions so that the guide feels approachable for first-year
              students.
            </p>
          </div>

          <div className="team-member">
            <img
              src={`${base}images/team/gavin.jpg`}
              alt="Portrait of Gavin McCarthy"
              className="team-photo"
            />
            <h3>Gavin McCarthy</h3>
            <p>
              Gavin is a first-semester senior majoring in Chemical Engineering.
              He contributed to accessibility considerations, UX layout choices,
              and the consistent display of distance, transit, and cost
              information across pages.
            </p>
          </div>
        </div>

        <p>
          All four team members completed ENGRC 3500 in Fall 2025. The course
          strengthened our skills in user-centered design, technical
          communication, and multimodal documentation. These skills shaped how
          this guide looks, feels, and functions.
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="page-section">
        <h2>Conclusion</h2>
        <p>
          The Ithaca Guide brings scattered information into one place for
          Cornell students. By emphasizing constraints such as transportation,
          weather, budget, and time, it helps students explore Ithaca in a way
          that feels manageable, welcoming, and realistic.
        </p>
      </div>
    </section>
  );
}

export default BehindTheGuide;
