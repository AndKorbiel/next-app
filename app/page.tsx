import React from 'react';
import { Grid } from '@mui/material';
import { Filters, RecipesList } from './components';

export default async function Home() {
  return (
    <main>
      <Grid
        container
        spacing={1}
        sx={{ mb: '2em', bgcolor: '#fff', padding: '0.5em' }}
      >
        <Filters />
      </Grid>

      <RecipesList />
    </main>
  );
}
