import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-panel">
          <p className="hero-eyebrow">WELCOME TO MU</p>

          <h1>Your Future Is Waiting Behind the Door</h1>

          <p className="hero-text">
            Discover our academic departments and meet the faculty preparing the
            next generation of monsters.
          </p>

          <div className="hero-actions">
            <Link className="hero-button primary-button" to="/departments">
              Explore Departments
            </Link>

            <Link className="hero-button outline-button" to="/faculty">
              Meet the Faculty
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
