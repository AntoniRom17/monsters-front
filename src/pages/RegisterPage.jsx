import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const emptyForm = {
  email: "",
  password: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Registration failed.");
        return;
      }
      localStorage.setItem("muAdminToken", data.token);
      setMessage(`Admin account created for ${form.email}.`);
      setForm(emptyForm);
    } catch (err) {
      setMessage("Could not connect to server.");
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <p className="page-eyebrow">ADMIN ACCESS</p>
        <h1>Register</h1>
        <p>Anyone can create a Monsters University admin account for this project.</p>

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

        <button type="submit">Create Account</button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </form>
    </section>
  );
}
