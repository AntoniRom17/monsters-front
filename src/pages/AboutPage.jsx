import "../styles/about.css";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-content">
        <header className="page-heading">
          <p className="page-eyebrow">ABOUT MONSTERS UNIVERSITY</p>

          <h1>Where Monsters Discover Their Potential</h1>

          <p>
            Monsters University helps students develop their talents through
            challenging academics, hands-on experience, and a strong campus
            community.
          </p>
        </header>

        <section className="about-section">
          <h2>Our Story</h2>

          <p>
            Monsters University was founded to give monsters a place to discover
            their strengths, sharpen their skills, and prepare for meaningful
            careers.
          </p>

          <p>
            What began as a small institution focused on scaring has grown into
            a university offering programs in technology, business, design,
            energy, leadership, and monster studies.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>

          <p>
            Our mission is to help every student recognize their potential and
            gain the knowledge, confidence, and experience needed to succeed.
          </p>

          <ul className="mission-list">
            <li>Provide practical and challenging education</li>
            <li>Encourage creativity, teamwork, and responsibility</li>
            <li>Support students from every monster background</li>
            <li>Prepare graduates to make an impact in the monster world</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Choose MU?</h2>

          <div className="about-grid">
            <article className="about-card">
              <h3>Hands-On Learning</h3>

              <p>
                Students apply what they learn through labs, projects,
                demonstrations, and real-world training.
              </p>
            </article>

            <article className="about-card">
              <h3>Expert Faculty</h3>

              <p>
                MU professors bring professional experience into the classroom
                and help students build both skill and confidence.
              </p>
            </article>

            <article className="about-card">
              <h3>Monster Community</h3>

              <p>
                Students learn alongside monsters with different talents,
                backgrounds, and perspectives in a supportive environment.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <h2>University Facts</h2>

          <div className="facts-grid">
            <article className="fact-card">
              <h3>1313</h3>
              <p>Year Founded</p>
            </article>

            <article className="fact-card">
              <h3>12,000+</h3>
              <p>Students</p>
            </article>

            <article className="fact-card">
              <h3>6</h3>
              <p>Academic Departments</p>
            </article>

            <article className="fact-card">
              <h3>Archie</h3>
              <p>The Scare Pig</p>
            </article>
          </div>
        </section>

        <section className="about-section about-motto">
          <p className="page-eyebrow">OUR MOTTO</p>
          <h2>Learn. Lead. Scare.</h2>
        </section>
      </div>
    </section>
  );
}
