import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import API from "../services/api";

const AddRecipe = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // await API.post("/recipes", {
      //   title,
      //   description,
      //   ingredients,
      //   steps,
      // });
      navigate("/");
    } catch (err) {
      setError("Failed to add recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#fff3ee] to-white px-4">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-[520px]
          rounded-2xl
          bg-white/85 backdrop-blur-lg
          p-10
          shadow-[0_30px_70px_rgba(0,0,0,0.12)]
        "
      >
        <h2 className="mb-1 text-center text-2xl font-bold text-[#ff6b4a]">
          Add New Recipe 🍳
        </h2>

        <p className="mb-6 text-center text-sm text-gray-600">
          Share your delicious recipe with the community
        </p>

        {error && (
          <div className="mb-4 rounded-md bg-[#ffe3de] px-3 py-2 text-sm text-[#c0392b]">
            {error}
          </div>
        )}

        {/* Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="
            mb-4 w-full
            rounded-lg border border-gray-300
            px-4 py-2.5 text-sm
            outline-none
            focus:border-[#ff6b4a]
          "
        />

        {/* Description */}
        <textarea
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="
            mb-4 w-full
            resize-none
            rounded-lg border border-gray-300
            px-4 py-2.5 text-sm
            outline-none
            focus:border-[#ff6b4a]
          "
        />

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={3}
          required
          className="
            mb-4 w-full
            resize-none
            rounded-lg border border-gray-300
            px-4 py-2.5 text-sm
            outline-none
            focus:border-[#ff6b4a]
          "
        />

        {/* Steps */}
        <textarea
          placeholder="Steps to prepare the recipe"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={4}
          required
          className="
            mb-6 w-full
            resize-none
            rounded-lg border border-gray-300
            px-4 py-2.5 text-sm
            outline-none
            focus:border-[#ff6b4a]
          "
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-[#ff6b4a]
            py-3
            text-white
            font-semibold
            transition-all duration-300
            hover:bg-[#ff5430]
            disabled:opacity-60
          "
        >
          {loading ? "Publishing recipe..." : "Add Recipe"}
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
