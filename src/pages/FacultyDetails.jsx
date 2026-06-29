import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFaculty } from "../api/faculty";
import "../styles/directory.css";

export default function FacultyDetails() {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaculty().then((data) => {
      const found = data.find((p) => String(p.id) === id);
      setProfessor(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <section className="faculty-details-page">
        <div className="faculty-profile">
          <div className="faculty-profile-header">
            <p className="page-eyebrow">MU FACULTY</p>
            <h1>Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

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
              {professor.department_name || professor.department}
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