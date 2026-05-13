// @ts-nocheck
import "./Home.css";
import Previewcard from "../components/Previewcard";

function Home() {
  return (
    <main className="home-page">

      <section className="hero-section">

        <section className="hero-text">

          <h1>
            Hitta och dela
            <br />
            dina favoritrecept
          </h1>

          <p>
            Upptäck nya recept eller dela dina egna favoriter.
          </p>

          <button>
            lägg upp recept
          </button>

        </section>

        <img
          src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
          alt="Pasta"
          className="hero-image"
        />

      </section>

      <section className="categories-section">

        <h2>Kategorier</h2>

        <nav className="categories">

          <button>Alla</button>
          <button>Frukost</button>
          <button>Lunch</button>
          <button>Middag</button>
          <button>Efterrätt</button>

        </nav>

      </section>

      <section className="popular-section">

        <header className="popular-header">

          <h2>Populära recept</h2>

          <button>Visa alla</button>

        </header>

        <section className="recipe-grid">

          <Previewcard
            title="Krämig pasta"
            image="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
            time="30 min"
          />

          <Previewcard
            title="Chokladtårta"
            image="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            time="60 min"
          />

          <Previewcard
            title="Vegetarisk curry"
            image="https://images.unsplash.com/photo-1547592180-85f173990554"
            time="40 min"
          />

        </section>

      </section>

    </main>
  );
}

export default Home;