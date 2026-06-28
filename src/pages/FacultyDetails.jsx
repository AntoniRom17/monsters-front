import { useParams, Link } from "react-router-dom";
import { faculty } from "../data/dummyData.js";
import "../styles/directory.css";

export default function FacultyDetails() {
  const { id } = useParams();

  const professor = faculty.find((professor) => professor.id === Number(id));

  if (!professor) {
    return (
      <section className="faculty-details-page">
        <div className="faculty-profile">
          <div className="faculty-profile-header">
            <p className="page-eyebrow">MU FACULTY</p>
            <h1>Professor Not Found</h1>
          </div>

          <div className="faculty-profile-body">
            <div className="profile-main">
              <p>We could not find that faculty member.</p>

              <Link className="card-link" to="/faculty">
                Back to Faculty
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="faculty-details-page">
      <article className="faculty-profile">
        <header className="faculty-profile-header">
          <p className="page-eyebrow">MU FACULTY PROFILE</p>

          <h1>{professor.name}</h1>

          <p className="faculty-title">{professor.title}</p>
        </header>

        <div className="faculty-profile-body">
          <main className="profile-main">
            <h2>About</h2>

            <p>{professor.bio}</p>

            <Link className="card-link" to="/faculty">
              ← Back to Faculty
            </Link>
          </main>

          <aside className="contact-panel">
            <h2>Contact</h2>

            <p>
              <strong>Email</strong>
              <br />

              <a href={`mailto:${professor.email}`}>{professor.email}</a>
            </p>

            <p>
              <strong>Department</strong>
              <br />
              {professor.department}
            </p>

            <p>
              <strong>Office</strong>
              <br />
              {professor.office}
            </p>
          </aside>
        </div>
      </article>
    </section>
  );
}
