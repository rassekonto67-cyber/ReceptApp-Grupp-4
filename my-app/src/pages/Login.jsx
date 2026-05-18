import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
  

export default function Login() {

  const formInitialState = {
    identifier: '', 
    password: ''
  };

  const [formData, setFormData] = useState(formInitialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function updateFormData(event) {
    const { name: key, value } = event.target;
    setFormData({ ...formData, [key]: value });
  }

  async function sendForm(event) {
    event.preventDefault();
    setError('');
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error?.message || 'Login failed');
      return;
    }
    localStorage.user = JSON.stringify(data);
    navigate('/');
  }


  return (
    <div className="login-page">
      <form className="login-form" onSubmit={sendForm}>
        <h1>Logga in</h1>

        <div className="form-group">
          <label htmlFor="identifier">
            Email eller användarnamn
          </label>

          <input
            id="identifier"
            required
            name="identifier"
            type="text"
            value={formData.identifier}
            onChange={updateFormData}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Lösenord</label>

          <input
            id="password"
            required
            name="password"
            type="password"
            value={formData.password}
            onChange={updateFormData}
          />
        </div>

        <button type="submit">Logga in</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Link to="/register">
          <button>
            Skapa nytt konto
          </button>
        </Link>

      </form>
    </div>
  );
}
