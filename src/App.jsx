import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetails from "./pages/DepartmentDetails";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetails from "./pages/FacultyDetails";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departments/:id" element={<DepartmentDetails />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
      </Route>
    </Routes>
  );
}
