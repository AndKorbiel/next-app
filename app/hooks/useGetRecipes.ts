import { useEffect, useState } from 'react';
import { Recipe, RecipesPayload } from '../types';

export const useGetRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch('https://dummyjson.com/recipes');
      const json: RecipesPayload = await data.json();

      if (json.recipes.length) setRecipesData(json.recipes);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    isLoading,
    recipesData,
  };
};
