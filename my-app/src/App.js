import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Recipe from "./pages/Recipe";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipecard" element={<RecipeCard />} />
      </Routes>
    </div>
  );
}

export default App;
