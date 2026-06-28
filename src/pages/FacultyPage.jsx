import { faculty } from "../data/dummyData.js";
import { Link } from "react-router-dom";
import "../styles/directory.css";

export default function FacultyPage() {
  return (
    <section className="directory-page">
      <div className="page-heading">
        <p className="page-eyebrow">MEET OUR EDUCATORS</p>
        <h1>Faculty Directory</h1>
        <p>Meet the professors preparing the next generation of monsters.</p>
      </div>

      <div className="directory-grid">
        {faculty.map((professor) => {
          return (
            <article className="directory-card" key={professor.id}>
              <h2>{professor.name}</h2>

              <p className="faculty-title">{professor.title}</p>

              <Link className="card-link" to={`/faculty/${professor.id}`}>
                View Profile
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
