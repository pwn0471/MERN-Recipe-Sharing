import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            🍽️ RecipeHub
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            ☰
          </button>

          <nav className={`links ${open ? "show" : ""}`}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/add-recipe" onClick={() => setOpen(false)}>Create</Link>
            <Link to="/login" className="login" onClick={() => setOpen(false)}>
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
