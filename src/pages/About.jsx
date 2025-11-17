function About() {
  return (
    <section className="page">
      <h1>About This Guide</h1>
      <p>
        This site was built as a Cornell student project to help students find
        realistic, low-stress ways to explore Ithaca. It focuses on off-campus
        options, TCAT-friendly routes, and things you can actually do between
        classes or on weekends.
      </p>

      <h2>How to Use It</h2>
      <ul>
        <li>
          Start with <span style={{ fontWeight: 600 }}>Closest to Campus</span> if you&apos;re
          short on time.
        </li>
        <li>
          Use <span style={{ fontWeight: 600 }}>Cheap Thrills</span> when money is tight.
        </li>
        <li>
          Filter by weather using <span style={{ fontWeight: 600 }}>Rain-Proof Plans</span> and{" "}
          <span style={{ fontWeight: 600 }}>Fall Favorites</span>.
        </li>
      </ul>

      <h2>Accessibility and Constraints</h2>
      <p>
        We try to flag distance, transit options, and rough price so you can
        quickly see if an activity works with your time, mobility, and budget.
      </p>

      <h2>References</h2>
      <p>
        Our research draws on enrollment data, studies on student transition and
        information overload, and sources about Ithaca activities. These sources
        helped shape the guide&apos;s focus on clarity, low-stress planning, and
        accessible exploration.
      </p>

      <ol className="references">
        <li>
          Student enrollment – Institutional Research and Planning, 2021.
          Available online: https://irp.cornell.edu/university-factbook/student-enrollment
        </li>
        <li>
          Worsley, Harrison, and Corcoran, Bridging the gap: Exploring the
          transition into university, Frontiers in Public Health, 2021.
        </li>
        <li>
          Stokoe, Nordstokke, and Wilcox, First year students’ perceptions of the
          transition to university, International Journal of Research in Education and Science, 2024.
        </li>
        <li>
          Young and Bunting, Rethinking college transitions, AERA Open, 2024.
        </li>
        <li>
          Catching, New student orientation programs: First-generation community
          college students, Rowan Digital Works, 2025.
        </li>
        <li>
          Visit Ithaca, Things to do in Ithaca, NY. https://www.visitithaca.com/things-to-do/
        </li>
        <li>
          Cornell University School of Continuing Education, Campus life and
          activities. https://sce.cornell.edu/courses/students/campus-life/activities
        </li>
        <li>
          The Statler Hotel, Things to do in the Finger Lakes Region.
          https://statlerhotel.cornell.edu/step-outside/local-experiences
        </li>
        <li>
          Visiting Cornell for 3 days — what should I do?, r/Cornell, 2021.
        </li>
        <li>
          Top 10 Things to Do in Ithaca as a New Cornell Student, 112-114 Ferris
          Place Rentals.
        </li>
        <li>
          Saracevic and Wood, Consolidation of Information, UNESCO, 1981.
        </li>
        <li>
          Gusenbauer, The age of abundant scholarly information, Research Synthesis Methods, 2021.
        </li>
        <li>
          Soilemezi and Linceviciute, Synthesizing qualitative research,
          International Journal of Qualitative Methods, 2018.
        </li>
        <li>
          York and Clymer, Gen Z, new student orientations, and information
          overload, College and Research Libraries News, 2025.
        </li>
        <li>
          Hoq, Information overload: Causes, consequences, and remedies, Philos.
          Prog., 2016.
        </li>
        <li>
          Cornell University, Health Promoting Campus Reports, 2024.
        </li>
        <li>
          Koo et al., Effects of benefits from campus recreation on attachment to
          the university, Global Sport Business Journal, 2019.
        </li>
      </ol>
    </section>
  );
}

export default About;
