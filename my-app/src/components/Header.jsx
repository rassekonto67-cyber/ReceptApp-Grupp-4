// @ts-ignore
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <section className="logo">
        <h2>logga</h2>
      </section>

      
      <nav className="nav-links">
        <Link to="/">Hem</Link>

        <Link to="/profile">Mina recept</Link>

        <Link to="/recipe">Receptsamling</Link>
      </nav>

      <section className="header-right">
        <input type="text" placeholder="Sök recept..." />

        <Link className="login-btn" to="/login">
          Logga in
        </Link>

        <Link className="register-btn" to="/register">
          Registrera
        </Link>
      </section>
    </header>
  );
}

export default Header;
