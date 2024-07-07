import { Box } from '@mui/material';
import { getData } from '../../utils';
import { RecipesPayload } from '../../types';
import { FiltersInputs } from './filtersInputs';

export const Filters = async () => {
  const data: RecipesPayload = await getData();
  const recipesData = data.recipes;

  return (
    <Box sx={{ display: 'flex' }}>
      <FiltersInputs recipesData={recipesData} />
    </Box>
  );
};
