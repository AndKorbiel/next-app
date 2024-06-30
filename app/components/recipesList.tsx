import * as React from 'react';
import { RecipesPayload } from '../types';
import { Grid } from '@mui/material';
import { getData } from '../utils';
import { Recipe } from './recipe';

export const RecipesList = async () => {
  const data: RecipesPayload = await getData();
  const recipesData = data.recipes;

  return (
    <Grid container spacing={2}>
      {recipesData.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </Grid>
  );
};
