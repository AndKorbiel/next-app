'use client';

import React from 'react';
import styles from './page.module.css';
import { Grid } from '@mui/material';
import { useGetRecipes } from './hooks';
import { Recipe } from './components';
import CachedIcon from '@mui/icons-material/Cached';

export default function Home() {
  const { isLoading, recipesData } = useGetRecipes();

  if (isLoading)
    return (
      <CachedIcon
        sx={{
          color: '#fff',
          display: 'block',
          fontSize: '72px',
          margin: 'auto',
        }}
      />
    );

  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        {recipesData.map(
          ({
            cookTimeMinutes,
            cuisine,
            id,
            image,
            ingredients,
            name,
            tags,
          }) => (
            <Recipe
              cookTimeMinutes={cookTimeMinutes}
              cuisine={cuisine}
              image={image}
              ingredients={ingredients}
              name={name}
              key={id}
              tags={tags}
            />
          ),
        )}
      </Grid>
    </main>
  );
}
