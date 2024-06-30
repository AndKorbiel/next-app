import React from 'react';
import { getData } from '../../utils';
import { RecipesPayload } from '../../types';

import { GoBackButton, Recipe } from '../../components';

export default async function DataPage({ params }: { params: { id: string } }) {
  const data: RecipesPayload = await getData();
  const recipesData = data.recipes;

  const recipe = recipesData.filter(
    (recipe) => recipe.id.toString() === params.id,
  )[0];

  return (
    <main>
      <GoBackButton />
      <Recipe recipe={recipe} />
    </main>
  );
}
