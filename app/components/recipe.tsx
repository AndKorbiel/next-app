import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import { Recipe as RecipeType } from '../types';
import { Chip, Divider, Grid } from '@mui/material';

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const { cookTimeMinutes, cuisine, image, id, ingredients, name, tags } =
    recipe;

  return (
    <Grid item xs={3} key={id}>
      <Card sx={{ bg: '#e7e7e7', maxWidth: 345 }}>
        <CardHeader title={name} subheader={cuisine}></CardHeader>
        <CardMedia component="img" height="194" image={image} />

        <CardContent>
          <Typography variant="body2">
            <strong>Cooking time:</strong> {cookTimeMinutes} min
          </Typography>

          <Divider sx={{ margin: '0.5em 0' }} />

          <Typography variant="body2" sx={{ mb: '0.5em' }}>
            <strong>Ingredients:</strong>
          </Typography>

          {ingredients.map((ing, index) => (
            <Chip label={ing} key={index} sx={{ margin: '0 0.2em 0.2em 0' }} />
          ))}

          <Divider sx={{ margin: '0.5em 0' }} />

          {tags.map((tag, index) => (
            <Typography key={index} variant="caption">
              <strong>#{tag} </strong>
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};
