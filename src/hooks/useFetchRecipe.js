import { useQuery } from "@tanstack/react-query";

const useFetchRecipe = (recipeId) => {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const fetchRecipe = async ({ queryKey }) => {
    const [, recipeId] = queryKey;

    if (!recipeId) {
      throw new Error("Recipe ID is missing");
    }

    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipe");
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: fetchRecipe,
    enabled: !!recipeId, // prevents unnecessary calls
    staleTime: 60 * 1000, // 1 minute
    cacheTime: 60 * 60 * 1000, // 1 hour
    refetchOnWindowFocus: false,
  });
};

export default useFetchRecipe;
