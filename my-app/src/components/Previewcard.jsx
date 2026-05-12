// @ts-nocheck
import "./Previewcard.css";
import { useNavigate } from "react-router-dom";

function Previewcard({ title, image, time }) {

  const navigate = useNavigate();

  return (
    <article className="preview-card">

      <img
        src={image}
        alt={title}
        className="preview-image"
      />

      <section className="preview-content">

        <h3>{title}</h3>

        <p>{time}</p>

        <button
          onClick={() => navigate("/recipecard")}
        >
          Visa recept
        </button>

      </section>

    </article>
  );
}

export default Previewcard;