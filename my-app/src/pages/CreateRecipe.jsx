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

  const handleSubmit = async (event) => {

    event.preventDefault();

    const newRecipe = {

      data: {

        Name: title,

        Bild: image,

        Kategori: category,

        Description: description,

      },

    };

    try {

      const response = await fetch(
        "http://localhost:1337/api/recipes",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newRecipe),

        }
      );

      const data = await response.json();

      console.log(
        "Recept skapat:",
        data
      );

    } catch (error) {

      console.error(
        "Error creating recipe:",
        error
      );

    }
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