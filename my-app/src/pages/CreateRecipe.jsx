// @ts-nocheck
import "./CreateRecipe.css";

function CreateRecipe() {

  return (
    <main className="create-recipe-page">

      <h1>Skapa recept</h1>

      <form className="recipe-form">

        <input
          type="text"
          placeholder="Titel"
        />

        <input
          type="text"
          placeholder="Bild URL"
        />

        <select>

          <option>
            Välj kategori
          </option>

          <option>
            Frukost
          </option>

          <option>
            Lunch
          </option>

          <option>
            Middag
          </option>

          <option>
            Efterrätt
          </option>

        </select>

        <textarea
          placeholder="Beskrivning"
        />

        <button>
          Skapa recept
        </button>

      </form>

    </main>
  );
}

export default CreateRecipe;