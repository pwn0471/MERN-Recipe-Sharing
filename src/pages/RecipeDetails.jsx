import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import API from "../services/api";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await API.get(`/recipes/${id}`);
        setRecipe(res.data);
      } catch (error) {
        console.error("Failed to fetch recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleLike = async () => {
    try {
      await API.put(
        `/recipes/like/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setRecipe({
        ...recipe,
        likes: recipe.likes.includes("temp")
          ? recipe.likes.filter(() => false)
          : [...recipe.likes, "temp"]
      });
    } catch (error) {
      alert("Login required to like recipe");
    }
  };

  const handleFavorite = async () => {
    try {
      await API.put(
        `/auth/favorite/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("Favorite updated ⭐");
    } catch (error) {
      alert("Login required to favorite recipe");
    }
  };

  if (loading) {
    return <div className="recipe-loading">Loading recipe...</div>;
  }

  if (!recipe) {
    return <div className="recipe-loading">Recipe not found</div>;
  }

  return (
    <div className="recipe-details-page">
      <div className="recipe-details-card">
        <h1>{recipe.title}</h1>

        <div className="recipe-actions">
          <button onClick={handleLike}>❤️ {recipe.likes.length}</button>
          <button onClick={handleFavorite}>⭐ Favorite</button>
        </div>

        <section className="recipe-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>
                <span>{ing.name}</span>
                <em>{ing.quantity}</em>
              </li>
            ))}
          </ul>
        </section>

        <section className="recipe-section">
          <h3>Steps</h3>
          <p>{recipe.instruction}</p>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetails;
