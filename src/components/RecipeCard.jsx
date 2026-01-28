import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.instruction}</p>

      <div className="card-footer">
        <span>❤️ {recipe.likes.length}</span>
        <button>⭐ Save</button>
      </div>
    </div>
  );
};

export default RecipeCard;
