import './Register.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function Register() {

  const formInitialState = {
    username: '',
    email: '',
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
    const response = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error?.message || 'Registration failed');
      return;
    }
    localStorage.user = JSON.stringify(data);
    navigate('/');
  }

  return (
    <div className="register-page">
  <form className="register-form" onSubmit={sendForm}>
  <h1>Skapa konto</h1>

  <div className="form-group">
    <label>Användarnamn:</label>

    <input
      required
      name="username"
      type="text"
      value={formData.username}
      onChange={updateFormData}
    />
  </div>

  <div className="form-group">
    <label>Email:</label>

    <input
      required
      name="email"
      type="email"
      value={formData.email}
      onChange={updateFormData}
    />
  </div>

  <div className="form-group">
    <label>
      Lösenord: <small>(minst 6 tecken)</small>
    </label>

    <input
      required
      minLength={6}
      name="password"
      type="password"
      value={formData.password}
      onChange={updateFormData}
    />
  </div>

  {error && <p style={{ color: "red" }}>{error}</p>}

  <button type="submit">Registrera</button>

  <h2>
    Har du redan ett konto?{" "}
    <Link to="/login">Logga in här</Link>
  </h2>
</form>
</div>
)};