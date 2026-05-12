import "./Login.css";
import { useNavigate } from "react-router-dom";
  

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <form className="login-form">
        <h1>Välkommen tillbaka!</h1>
        <h2>Logga in för att fortsätta</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input id="password" type="password" placeholder="••••••••" />
          <h2> Glömt lösenord?</h2>
        </div>

        <button type="submit">Logga in</button>
        <button
          type="button"
          onClick={() => navigate("/register")}
        >
          Skapa nytt konto
        </button>

      </form>
    </div>
  );
}
