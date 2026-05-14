// @ts-nocheck
import { useEffect, useState } from "react";
import "./Home.css";
import Previewcard from "../components/Previewcard";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]); // Initialiseras som tom array
  const [selectedCategory, setSelectedCategory] = useState("Alla");
  const [loading, setLoading] = useState(true);

  // 1. Hämta data (Endast en useEffect)
  useEffect(() => {
    fetch("http://localhost:1337/api/recipes?populate=*")
      .then((res) => res.json())
      .then((resData) => {
        // Strapi v4 returnerar data i formatet: { data: [...] }
        if (resData && resData.data) {
          console.log("Här är min data från Strapi:", resData); // <--- Denna rad är guld värd!
          setRecipes(resData.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  // 2. Filtrering och sortering med säkerhet för null
  // Vi använder (recipes || []) för att vara helt säkra på att .filter inte kraschar
  const filteredRecipes = (recipes || [])
    .filter((recipe) => {
      if (selectedCategory === "Alla") {
        return true;
      }
      
      // OBS: Om du använder Strapi ligger kategorin troligen i recipe.attributes.category
      const category = recipe.attributes?.category || recipe.category;
      return category === selectedCategory;
    })
    .sort((a, b) => {
      // Sortering på kommentarer (säkerställer att vi inte jämför undefined)
      const commentsA = a.attributes?.comments || a.comments || 0;
      const commentsB = b.attributes?.comments || b.comments || 0;
      return commentsB - commentsA;
    });

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
          {["Alla", "Frukost", "Lunch", "Middag", "Efterrätt"].map((cat) => (
            <button 
              key={cat} 
              className={selectedCategory === cat ? "active" : ""} 
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
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
          {loading ? (
            <p>Laddar recept...</p>
          ) : filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => {
              // Här mappar vi ut data. Om Strapi används ligger värden i .attributes
              const item = recipe.attributes || recipe;
              
              return (
                <Previewcard
                  key={recipe.id}
                  title={item.Name}
                  description={item.Description}
                  ingredients={item.Ingredienser}
                  image={item.Bild}
                  time={item.Tid}
                  category={item.Kategori}
                />
              );
            })
          ) : (
            <p>Inga recept hittades i denna kategori.</p>
          )}
        </section>
      </section>
    </main>
  );
}

export default Home;