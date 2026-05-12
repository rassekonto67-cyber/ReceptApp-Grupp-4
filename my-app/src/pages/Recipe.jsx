import RecipeCard from "../components/RecipeCard";

function Recipe() {
  return (
    <>
      <h1>Recipe Page</h1>

      <RecipeCard
        title="Recipe title" //title={recipe.title} när API är klar
        category="Recipe category"
        description="Recipe description"
        image="https://via.placeholder.com/300"
      />
    </>
  );
}

export default Recipe;