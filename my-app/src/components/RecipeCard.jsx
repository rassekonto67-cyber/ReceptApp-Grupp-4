// @ts-nocheck
import "./RecipeCard.css";

function RecipeCard() {

  return (
    <main className="recipe-card">

      <header>
        <h1>Lax med citron</h1>

        <p>45 min</p>
      </header>

      <img
        src="https://images.unsplash.com/photo-1467003909585-2f8a72700288"
        alt="Lax med citron"
      />

      <section>
        <h2>Ingredienser</h2>

        <ul>
          <li>Lax</li>
          <li>Citron</li>
          <li>Potatis</li>
        </ul>
      </section>

      <section>
        <h2>Beskrivning</h2>

        <p>
          Stek laxen och servera med potatis.
        </p>
      </section>

    </main>
  );
}

export default RecipeCard;