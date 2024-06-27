import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Recipe as RecipeType } from '../types';
import { Avatar, Chip, Divider, Grid, ListItem, Stack } from '@mui/material';

type RecipeProps = Omit<RecipeType, 'id'>;

export const Recipe = ({
  cookTimeMinutes,
  cuisine,
  image,
  ingredients,
  name,
  tags,
}: RecipeProps) => {
  return (
    <Grid item xs={3}>
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
