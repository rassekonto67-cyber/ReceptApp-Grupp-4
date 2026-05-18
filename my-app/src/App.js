import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Recipe from "./pages/Recipe";
import RecipeCard from "./components/RecipeCard";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipecard" element={<RecipeCard />} />
        <Route path="/create-recipe" element={<CreateRecipe />}
/>
      </Routes>
    </div>
  );
}

export default App;
