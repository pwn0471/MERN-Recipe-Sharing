import { Link, useNavigate } from "react-router-dom";

const FoodCard = ({ recipe }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Handle card click (open recipe)
  const handleOpenRecipe = (e) => {
    if (!token) {
      e.preventDefault();
      navigate("/login");
    }
  };

  // Handle like / favorite
  const handleLike = (e) => {
    e.preventDefault(); // prevent navigation
    e.stopPropagation();

    if (!token) {
      navigate("/login");
      return;
    }

    // TODO: API call (later)
    console.log("Liked recipe:", recipe.id);
  };

  // Image fallback
  const imageUrl =
    recipe.image ||
    "https://via.placeholder.com/400x250?text=No+Image";

  return (
    <Link to={`/recipe/${recipe.id}`} onClick={handleOpenRecipe}>
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">

        {/* ❤️ Like Button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full shadow hover:scale-110 transition"
        >
          🤍
        </button>

        {/* Image */}
        <img
          src={imageUrl}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />

        {/* Cooking Time */}
        {recipe.readyInMinutes && (
          <div className="absolute top-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
            ⏱ {recipe.readyInMinutes} min
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 line-clamp-2">
            {recipe.title}
          </h3>

          {/* Optional source */}
          {recipe.sourceName && (
            <p className="text-sm text-gray-500 mt-1">
              From {recipe.sourceName}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
