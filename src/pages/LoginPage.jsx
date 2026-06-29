import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const emptyForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("muAdminToken"),
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Login failed.");
        return;
      }
      localStorage.setItem("muAdminToken", data.token);
      setIsLoggedIn(true);
      setMessage("Welcome back!");
      setForm(emptyForm);
    } catch (err) {
      setMessage("Could not connect to server.");
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <p className="page-eyebrow">ADMIN ACCESS</p>
        <h1>Log In</h1>
        <p>Use the admin account you created on the register page.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={form.email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          required
          type="password"
          value={form.password}
        />

        <button type="submit">Log In</button>

        {message && <p className="auth-message">{message}</p>}

        {isLoggedIn && (
          <p className="auth-success">You are logged in as an MU admin.</p>
        )}

        <p className="auth-switch">
          Need an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}
