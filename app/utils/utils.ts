import { FiltersState } from '../store/filtersSlice';
import { Product, Recipe } from '../types';

type ApplyFiltersToRecipesProps = {
  filters: FiltersState;
  recipes: Recipe[];
  selectedProducts: Product[];
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

export function matchAvailableProductsToRecipe(
  range: number,
  recipes: Recipe[],
  selectedProducts: Product[],
) {
  const filteredRecipes = recipes.filter((recipe) => {
    const ingredients = recipe.ingredients;
    const products = selectedProducts.map((pr) => pr.name);

    const numberOfMatchingProducts = ingredients.filter((ind) =>
      products.includes(ind),
    ).length;

    if (ingredients.length - numberOfMatchingProducts <= range) return recipe;
  });

  return filteredRecipes;
}

export function applyFiltersToRecipes({
  filters,
  recipes,
  selectedProducts,
}: ApplyFiltersToRecipesProps) {
  const { category, range, tags, title } = filters;
  let matchedRecipes: Recipe[] = recipes;

  if (title) {
    matchedRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(title.toLowerCase()),
    );
  }

  if (category !== '') {
    matchedRecipes = matchedRecipes.filter(
      (recipe) => recipe.cuisine.toLowerCase() === category.toLowerCase(),
    );
  }

  if (tags.length) {
    matchedRecipes = matchedRecipes.filter((recipe) =>
      tags.every((tag) => recipe.tags.includes(tag)),
    );
  }

  matchedRecipes = matchAvailableProductsToRecipe(
    range,
    matchedRecipes,
    selectedProducts,
  );

  return matchedRecipes;
}
