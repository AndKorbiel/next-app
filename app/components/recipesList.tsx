'use client';

import React, { useEffect, useState } from 'react';
import { Recipe as Recipetype } from '../types';
import { Grid } from '@mui/material';
import { Recipe } from './recipe';
import { useAppSelector } from '../store/hooks';
import { selectFilters } from '../store/filtersSlice';
import { applyFiltersToRecipes } from '../utils';

export const RecipesList = ({ recipes }: { recipes: Recipetype[] }) => {
  const { filters } = useAppSelector(selectFilters);
  const [filteredRecipes, filterRecipes] = useState<Recipetype[]>([]);

  useEffect(() => {
    const updated = applyFiltersToRecipes({ filters, recipes });

    filterRecipes(updated);
  }, [recipes, filters]);

  return (
    <Grid container spacing={2}>
      {filteredRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </Grid>
  );
};
