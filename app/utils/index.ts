import { FiltersState } from '../store/filtersSlice';
import { Recipe } from '../types';

type ApplyFiltersToRecipesProps = {
  filters: FiltersState;
  recipes: Recipe[];
};

export async function getData() {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    return res.json();
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch data');
  }
}

export function applyFiltersToRecipes({
  filters,
  recipes,
}: ApplyFiltersToRecipesProps) {
  const { category, tags, title } = filters;
  let updated: Recipe[] = recipes;

  if (title) {
    updated = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(title.toLowerCase()),
    );
  }

  if (category !== '') {
    updated = updated.filter(
      (recipe) => recipe.cuisine.toLowerCase() === category.toLowerCase(),
    );
  }

  if (tags.length) {
    updated = updated.filter((recipe) =>
      tags.every((tag) => recipe.tags.includes(tag)),
    );
  }

  return updated;
}
