// @ts-nocheck
import { useState } from "react";
import "./CreateRecipe.css";

function CreateRecipe() {

  const [title, setTitle] = useState("");

  const [image, setImage] = useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    const newRecipe = {
      title,
      image,
      category,
      description,
    };

    console.log(newRecipe);
  };

  return (
    <main className="create-recipe-page">

      <h1>Skapa recept</h1>

      <form
        className="recipe-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Bild URL"
          value={image}
          onChange={(event) =>
            setImage(event.target.value)
          }
        />

        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        >

          <option value="">
            Välj kategori
          </option>

          <option value="Frukost">
            Frukost
          </option>

          <option value="Lunch">
            Lunch
          </option>

          <option value="Middag">
            Middag
          </option>

          <option value="Efterrätt">
            Efterrätt
          </option>

        </select>

        <textarea
          placeholder="Beskrivning"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
        />

        <button type="submit">
          Skapa recept
        </button>

      </form>

    </main>
  );
}

export default CreateRecipe;