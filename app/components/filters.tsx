'use client';

import {
  Autocomplete,
  Box,
  Slider,
  TextField,
  Typography,
} from '@mui/material';

const tags = ['Abc', 'cda', 'italian'];
const categories = ['Italian', 'American', 'Japan'];

const mrStyle = { mr: '0.5em' };

export const Filters = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <TextField label="Search by recipe title" sx={mrStyle} />

      <Autocomplete
        multiple
        options={tags}
        sx={{ ...mrStyle, width: '300px' }}
        limitTags={2}
        renderInput={(params) => <TextField {...params} label="Search tags" />}
      />

      <Autocomplete
        options={categories}
        sx={{ width: '200px' }}
        renderInput={(params) => (
          <TextField {...params} label="Search categories" />
        )}
      />

      <Box sx={{ width: 300, ml: '1em' }}>
        <Typography gutterBottom sx={{ color: '#818181' }}>
          Missing ingredients threshold
        </Typography>

        <Slider
          defaultValue={9}
          shiftStep={9}
          step={3}
          marks
          min={0}
          max={9}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
};
