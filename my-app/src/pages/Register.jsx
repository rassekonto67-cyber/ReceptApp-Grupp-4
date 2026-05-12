import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <form className="register-form">
        <h1>Skapa ett konto</h1>
        
        <div className="form-group">
           <label htmlFor="firstName">Förnamn</label>
           <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form-group">
           <label htmlFor="lastName">Efternamn</label>
           <input type="text" id="lastName" name="lastName" required />
        </div>

        <div className="form-group">
           <label htmlFor="username">Användarnamn</label>
           <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
           <label htmlFor="email">Email</label>
           <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
           <label htmlFor="password">Lösenord</label>
           <input type="password" id="password" placeholder="Minst 6 tecken" name="password" required />
        </div>

        <button type="submit">Registrera</button>
        <h2> Har du redan ett konto? <a href="/login">Logga in här</a></h2>
      </form>
    </div>
  );
}


