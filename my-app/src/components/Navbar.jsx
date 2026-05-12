import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Hem</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registrera</Link>
      <Link to="/profile">Min profil</Link>
      <Link to="/recipe">Recept</Link>
    </nav>
  );
}

export default Navbar;
