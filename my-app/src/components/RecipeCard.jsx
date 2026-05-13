// @ts-nocheck

import { useState } from "react";
import ComentCard from "./ComentCard";
import "./RecipeCard.css";

function RecipeCard() {
  const [showComments, setShowComments] = useState(false);

  return (
    <main className="recipe-card">
      <section className="recipe-top">
        <section className="recipe-info">
          <header className="recipe-title">
            <h1>TITEL</h1>

            <p>⏱ 45 min</p>
          </header>

          <ul className="ingredients-list">
            <li>Ingrediens</li>
            <li>Ingrediens</li>
            <li>Ingrediens</li>
            <li>Ingrediens</li>
            <li>Ingrediens</li>
          </ul>
        </section>

        <section className="recipe-image-container">
          <img
            src="https://images.unsplash.com/photo-1467003909585-2f8a72700288"
            alt="recipe"
            className="recipe-image"
          />
        </section>
      </section>

      <section className="description-box">
        <h2>beskrivning</h2>

        <p>Här kommer receptbeskrivningen senare.</p>
      </section>

      <footer className="recipe-buttons">
        <button onClick={() => setShowComments(!showComments)}>
          kommentarer 35 +
        </button>

        <button onClick={() => setShowComments(true)}>kommentera</button>

        <button>recept av: profil</button>
      </footer>

      {showComments && <ComentCard />}
    </main>
  );
}

export default RecipeCard;
