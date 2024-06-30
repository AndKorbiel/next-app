import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { RecipesPayload } from '../types';
import Link from 'next/link';
import { getData } from '../utils';

export default async function DataPage() {
  const data: RecipesPayload = await getData();
  const recipesData = data.recipes;

  return (
    <main>
      <div>
        <Typography variant="h4">Recipes list</Typography>
        {recipesData.map((recipe) => (
          <Box key={recipe.id} sx={{ display: 'flex', margin: '1em 0' }}>
            <Typography variant="h6" sx={{ mr: '1em' }}>
              {recipe.name}
            </Typography>

            <Link href={`/list/${recipe.id}`}>
              <Button variant="contained">Read more</Button>
            </Link>
          </Box>
        ))}
      </div>
    </main>
  );
}
