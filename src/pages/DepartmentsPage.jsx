import { useState, useEffect } from "react";
import DepartmentCard from "../components/DepartmentCard";
import { getDepartments } from "../api/departments";
import "../styles/directory.css";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments().then(setDepartments);
  }, []);

  return (
    <section className="directory-page">
      <div className="page-heading">
        <p className="page-eyebrow">ACADEMICS AT MU</p>
        <h1>Departments</h1>
        <p>
          Browse the Monsters University departments preparing students for
          scaring, energy work, door systems, and monster-world leadership.
        </p>
      </div>

      <div className="directory-grid">
        {departments.map((department) => {
          return <DepartmentCard department={department} key={department.id} />;
        })}
      </div>
    </section>
  );
}