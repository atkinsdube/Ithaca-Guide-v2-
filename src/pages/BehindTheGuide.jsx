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
          information about activities in the Ithaca area and on campus. Research
          on student transition, new student orientations, and informational
          support shows that the way information is presented affects how
          comfortable students feel navigating their new environment [1-5].
          Students are also working within dense and fragmented information
          environments, which can contribute to information overload and make it
          harder to plan even simple outings [6-9]. Existing resources such as
          blogs, Reddit threads, tourism websites, and scattered university pages
          are fragmented and inconsistent. As a result, planning something simple
          to do between classes can become stressful, time consuming, and
          overwhelming.
        </p>
      </div>

      {/* BACKGROUND */}
      <div className="page-section">
        <h2>Background and History</h2>
        <p>
          Cornell welcomes thousands of new students each year [10], all adjusting
          to a new academic and social environment. Studies of the transition into
          university and new student orientations emphasize how important clear,
          accessible information is for helping students feel a sense of belonging
          and control [1-5]. When information about what to do and where to go is
          scattered or unclear, students may feel uncertain about how to use their
          limited free time.
        </p>
        <p>
          Cornell and partner units provide information about student life,
          wellbeing, and recreation through campus health initiatives and
          recreation programming that link activity to attachment to the
          university [11-12]. At the same time, students are navigating an
          environment with a large volume of available information, and research
          on information overload and consolidation describes how difficult it can
          be to sift through multiple sources in order to make a simple decision
          [6-9]. When resources that describe the Ithaca area do not foreground
          student-centered details such as distance, transit, cost, and realistic
          time requirements, the effort required to plan an outing increases.
        </p>
        <p>
          To build the activity list for this guide, we drew on local and
          university-facing sources that describe things to do in Ithaca and
          around campus [13-17]. Tourism and hospitality sites, Cornell activity
          listings, and advice from current students helped us identify realistic,
          student-friendly activities. The Ithaca Guide brings these ideas
          together in a single, structured, easy-to-use resource tailored
          specifically for Cornell students, with an emphasis on quick scanning
          and low-stress planning.
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
        <p><strong>This guide includes:</strong></p>
        <ul>
          <li>Walkable or TCAT-accessible off-campus activities</li>
          <li>Free or budget-friendly experiences</li>
          <li>Weather-based categories such as Rain-Proof Plans and Fall Favorites</li>
          <li>Realistic timing estimates and quick-scan information</li>
        </ul>

        <p><strong>This guide does not include:</strong></p>
        <ul>
          <li>Bars, clubs, or nightlife</li>
          <li>Full restaurant reviews</li>
          <li>Restricted or student-only events</li>
          <li>Irregular seasonal pop-up activities</li>
        </ul>
      </div>

      {/* DIRECTIONS AND FIGURES */}
      <div className="page-section">
        <h2>How to Use the Guide</h2>
        <p>
          This guide is designed for quick scanning and low-stress decision making.
          The steps below outline how a student might use it during a short break
          between classes. Figures 1 through 3 show the main views that support
          that process.
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
          <li>A TCAT pass, free for first year students</li>
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
              William is a first-semester senior majoring in Chemical Engineering.
              He contributed to stylistic and UX decisions, data collection, and
              grouping activities into categories that reflect real student needs.
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
              He contributed to UX feedback, accessibility-focused design choices,
              and user testing insights that improved the clarity of the guide.
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
          The Ithaca Guide brings scattered information into one place for Cornell
          students. By emphasizing constraints such as transportation, weather,
          budget, and time, it helps students explore Ithaca in a way that feels
          manageable and realistic. The guide is grounded in research on student
          transition, information overload, and campus wellbeing, as well as local
          sources about Ithaca activities [1-17].
        </p>
      </div>

      {/* REFERENCES */}
      <div className="page-section">
        <h2>References</h2>

        <div className="references-list">
          <p>[1] M. Worsley, N. Harrison, and M. Corcoran, “Bridging the gap: Exploring the transition into university,” Frontiers in Public Health, 2021.</p>
          <p>[2] E. Stokoe, D. Nordstokke, and P. Wilcox, “First year students perceptions of the transition to university,” International Journal of Research in Education and Science, 2024.</p>
          <p>[3] R. Young and K. Bunting, “Rethinking college transitions,” AERA Open, 2024.</p>
          <p>[4] S. Catching, New student orientation programs: First-generation community college students, Rowan Digital Works, 2025.</p>
          <p>[5] B. York and A. Clymer, “Gen Z, new student orientations, and information overload,” College and Research Libraries News, 2025.</p>
          <p>[6] K. M. G. Hoq, “Information overload: Causes, consequences and remedies,” Philosophical Progress, 2016.</p>
          <p>[7] T. Saracevic and J. Wood, Consolidation of Information: A Handbook on Evaluation. UNESCO, 1981.</p>
          <p>[8] M. Gusenbauer, “The age of abundant scholarly information and its synthesis,” Research Synthesis Methods, 2021.</p>
          <p>[9] I. Soilemezi and I. Linceviciute, “Synthesizing qualitative research,” International Journal of Qualitative Methods, 2018.</p>
          <p>[10] Cornell University, “Student enrollment,” Institutional Research and Planning, 2021. Available: https://irp.cornell.edu/university-factbook/student-enrollment</p>
          <p>[11] Cornell University, Health Promoting Campus Reports, 2024.</p>
          <p>[12] J. Koo et al., “Effects of benefits from campus recreation on attachment to the university,” Global Sport Business Journal, 2019.</p>
          <p>[13] Visit Ithaca, “Things to do in Ithaca, NY.” Available: https://www.visitithaca.com/things-to-do/</p>
          <p>[14] Cornell University School of Continuing Education, “Campus life and activities.” Available: https://sce.cornell.edu/courses/students/campus-life/activities</p>
          <p>[15] The Statler Hotel, “Things to do in the Finger Lakes Region.” Available: https://statlerhotel.cornell.edu/step-outside/local-experiences</p>
          <p>[16] “Visiting Cornell for 3 days, what should I do,” r/Cornell, 2021.</p>
          <p>[17] “Top 10 Things to Do in Ithaca as a New Cornell Student,” 112–114 Ferris Place Rentals.</p>
        </div>
      </div>
    </section>
  );
}

export default BehindTheGuide;
