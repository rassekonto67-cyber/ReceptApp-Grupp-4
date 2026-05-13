// @ts-nocheck
import { useState } from "react";
import "./Home.css";
import Previewcard from "../components/Previewcard";
import { Link } from "react-router-dom";

function Home() {
  const recipes = [
    {
      id: 1,
      title: "Pannkakor",
      category: "Frukost",
      comments: 50,
      image: "https://via.placeholder.com/300",
      time: "20 min",
    },

    {
      id: 2,
      title: "Pasta Carbonara",
      category: "Middag",
      comments: 12,
      image: "https://via.placeholder.com/300",
      time: "40 min",
    },

    {
      id: 3,
      title: "Smoothie Bowl",
      category: "Frukost",
      comments: 85,
      image: "https://via.placeholder.com/300",
      time: "10 min",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const filteredRecipes = recipes

    .filter((recipe) => {
      if (selectedCategory === "Alla") {
        return true;
      }

      return recipe.category === selectedCategory;
    })
    .sort((a, b) => b.comments - a.comments);

  return (
    <main className="home-page">
      <section className="hero-section">
        <section className="hero-text">
          <h1>
            Hitta och dela
            <br />
            dina favoritrecept
          </h1>

          <p>Upptäck nya recept eller dela dina egna favoriter.</p>

          <Link to="/login" className="create-recipe-btn">
            Skapa recept
          </Link>
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
          <button onClick={() => setSelectedCategory("Alla")}>Alla</button>
          <button onClick={() => setSelectedCategory("Frukost")}>Frukost</button>
          <button onClick={() => setSelectedCategory("Lunch")}>Lunch</button>
          <button onClick={() => setSelectedCategory("Middag")}>Middag</button>
          <button onClick={() => setSelectedCategory("Efterrätt")}>Efterrätt</button>
        </nav>
      </section>

      <section className="popular-section">
        <header className="popular-header">
          <h2>Populära recept</h2>

          <Link to="/recipe" className="show-all-btn">
            Visa alla
          </Link>
        </header>

        <section className="recipe-grid">
      {filteredRecipes.map((recipe) => (
            <Previewcard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              time={recipe.time}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Home;
