// @ts-nocheck
import { useState } from "react";
import Previewcard from "../components/Previewcard";
import "./Recipe.css";

function Recipe() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="recipe-page">
      <header className="recipe-header">
        <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
          ☰ Kategorier
        </button>
      </header>

      {showMenu && (
        <aside className="category-menu">
          <nav>
            <ul>
              <li>Pasta</li>
              <li>Fisk</li>
              <li>Pizza</li>
              <li>Dessert</li>
            </ul>
          </nav>
        </aside>
      )}

      <section className="recipe-grid">
        <Previewcard
          title="Lax med citron"
          image="https://via.placeholder.com/300"
          time="45 min"
        />

        <Previewcard
          title="Vegetarisk lasagne"
          image="https://via.placeholder.com/300"
          time="1 h"
        />

        <Previewcard
          title="Bananpannkakor"
          image="https://via.placeholder.com/300"
          time="30 min"
        />
      </section>
    </main>
  );
}

export default Recipe;
