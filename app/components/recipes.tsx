import * as React from 'react';
import { RecipesPayload } from '../types';
import { getData } from '../utils';
import { RecipesList } from './recipesList';

export const Recipes = async () => {
  const data: RecipesPayload = await getData();
  const recipesData = data.recipes;

  return <RecipesList recipes={recipesData} />;
};
