import React from 'react';
import styles from './page.module.css';
import { Grid } from '@mui/material';
import { Recipe } from './components';
import { RecipesPayload } from './types';

async function getData() {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    return res.json();
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
  const data: RecipesPayload = await getData();
  const recipesData = data.recipes;

  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        {recipesData?.map(
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
