import { useState } from "react";
//import API from "../services/api";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [instruction, setInstruction] = useState("");
  const [ingredients, setIngredients] = useState([
    { name: "", quantity: "" }
  ]);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const removeIngredientField = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/recipes",
        { title, instruction, ingredients },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Recipe added successfully!");
      setTitle("");
      setInstruction("");
      setIngredients([{ name: "", quantity: "" }]);
    } catch (error) {
      alert("Failed to add recipe");
    }
  };

  return (
    <div className="add-recipe-page">
      <form className="add-recipe-card" onSubmit={handleSubmit}>
        <h2>Create New Recipe 🍳</h2>

        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Steps / Instructions"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          required
        />

        <h4>Ingredients</h4>

        {ingredients.map((ingredient, index) => (
          <div className="ingredient-row" key={index}>
            <input
              type="text"
              placeholder="Ingredient"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
              required
            />

            {ingredients.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeIngredientField(index)}
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="add-ingredient-btn"
          onClick={addIngredientField}
        >
          + Add Ingredient
        </button>

        <button type="submit" className="submit-btn">
          Publish Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
