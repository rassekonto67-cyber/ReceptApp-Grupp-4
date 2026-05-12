// @ts-ignore
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>logga</h2>
      </div>

      <nav className="nav-links">
        <a href="/">Hem</a>
        <a href="/">Mina recept</a>
        <a href="/">Receptsamling</a>
      </nav>

      <div className="header-right">
        <input type="text" placeholder="Sök recept..." />
        <a className="login-btn" href="/login">
          Logga in
        </a>
        <a className="register-btn" href="/register">
          Registrera
        </a>
      </div>
    </header>
  );
}

export default Header;
