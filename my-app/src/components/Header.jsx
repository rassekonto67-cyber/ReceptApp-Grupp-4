// @ts-ignore
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  return (
    <header className="header">
      <section className="logo">
        <h2>Logga</h2>
      </section>

      <nav className="nav-links">
        <Link to="/">Hem</Link>
        <Link to="/recipe">Receptsamling</Link>

        {token && (
          <>
            <Link to="/profile">Mina recept</Link>
            <Link to="/create-recipe">Skapa recept</Link>
          </>
        )}
      </nav>

      <section className="header-right">
        <input type="text" placeholder="Sök recept..." />

        {!token ? (
          <>
            <Link className="login-btn" to="/login">
              Logga in
            </Link>

            <Link className="register-btn" to="/register">
              Registrera
            </Link>
          </>
        ) : (
          <>
            <span className="user-name">{user?.username}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logga ut
            </button>
          </>
        )}
      </section>
    </header>
  );
}

export default Header;
