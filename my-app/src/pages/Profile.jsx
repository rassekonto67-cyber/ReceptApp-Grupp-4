import "./Profile.css";
import Previewcard from "../components/Previewcard";

export default function Profile() {
  return (
    <div className="profile-page">
      
      <aside className="sidebar">
        <h2>Kategorier</h2>

        <ul>
          <li>Mina recept</li>
          <li>Sparade recept</li>
          <li>Mina kommentarer</li>
          <li>Inställningar</li>
        </ul>
      </aside>

      <main className="content">
        <div className="content-header">
          <h1>Mina recept</h1>

          <button className="create-btn">
            + Skapa nytt recept
          </button>
        </div>

        <div className="card-grid">
          <Previewcard title="Recipe 1" />
          <Previewcard title="Recipe 2" />
          <Previewcard title="Recipe 3" />
        </div>
      </main>
    </div>
  );
}