import { Link } from "react-router-dom";
import muLogo from "../assets/mulogo.png";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="main-navbar">
        <nav className="nav-group nav-left">
          <Link to="/departments">Departments</Link>
          <Link to="/faculty">Faculty</Link>
        </nav>

        <Link className="brand" to="/">
          <span className="brand-name">MONSTERS UNIVERSITY</span>

          <div className="logo-frame">
            <img src={muLogo} alt="Monsters University logo" />
          </div>
        </Link>

        <nav className="nav-group nav-right">
          <Link to="/about">About</Link>
          <Link to="/login">Admin Login</Link>
        </nav>
      </div>
    </header>
  );
}
