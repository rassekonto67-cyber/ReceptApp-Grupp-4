// @ts-nocheck
import "./ComentCard.css";

function ComentCard() {
  return (
    <section className="coment-card">
      <section className="coments-list">
        <article className="single-coment">
          <h3>Användare *****</h3>

          <p>kommentar</p>
        </article>

        <article className="single-coment">
          <h3>Användare *****</h3>

          <p>kommentar</p>
        </article>

        <article className="single-coment">
          <h3>Användare *****</h3>

          <p>kommentar</p>
        </article>
      </section>

      <section className="coment-form">
        <textarea placeholder="skriv kommentar..." />

        <button>skicka</button>
      </section>
    </section>
  );
}

export default ComentCard;
