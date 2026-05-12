// @ts-nocheck
import Previewcard from "../components/Previewcard";

function Recipe() {
  const recipes = [
    {
      id: 1,
      title: "Lax med citron",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
      time: "45 min",
    },

    {
      id: 2,
      title: "Vegetarisk lasagne",
      image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590",
      time: "1 h",
    },

    {
      id: 3,
      title: "Bananpannkakor",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      time: "30 min",
    },
  ];

  return (
    <main className="recipe-page">
      <aside className="sidebar">
        <h3>Kategori</h3>

        <nav>
          <ul>
            <li>Pasta</li>
            <li>Fisk</li>
            <li>Macka</li>
            <li>Pizza</li>
          </ul>
        </nav>
      </aside>

      <section className="recipe-content">
        <header className="recipe-header">
          <h2>Receptsamling</h2>

          <button>+ Skapa nytt recept</button>
        </header>

        <section className="recipe-grid">
          {recipes.map((recipe) => (
            <article key={recipe.id}>
              <Previewcard
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
              />
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Recipe;
