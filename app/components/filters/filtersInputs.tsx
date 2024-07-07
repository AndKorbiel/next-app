'use client';

import {
  Autocomplete,
  Box,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import { Recipe } from '../../types';
import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectFilters,
  setCategory,
  setRange,
  setTags,
  setTile,
} from '../../store/filtersSlice';

const mrStyle = { mr: '0.5em' };

type FiltersInputsProps = {
  recipesData: Recipe[];
};

export const FiltersInputs = ({ recipesData }: FiltersInputsProps) => {
  const [optionsLoading, setOptionsLoading] = useState(false);
  const { filters } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const options = useMemo(() => {
    setOptionsLoading(true);
    const tags: string[] = [];
    const categories: string[] = [];

    recipesData.forEach((recipe) => {
      recipe.tags.forEach((tag) => {
        if (tags.indexOf(tag) === -1) tags.push(tag);
      });

      if (categories.indexOf(recipe.cuisine) === -1)
        categories.push(recipe.cuisine);
    });

    const sortedC = categories.sort((a, b) => a.localeCompare(b));
    const sortedT = tags.sort((a, b) => a.localeCompare(b));

    setOptionsLoading(false);

    return {
      categories: sortedC,
      tags: sortedT,
    };
  }, [recipesData]);

  return (
    <Box sx={{ display: 'flex' }}>
      <TextField
        label="Search by recipe title"
        sx={mrStyle}
        onChange={(e) => dispatch(setTile(e.target.value))}
      />

      <Autocomplete
        multiple
        options={options.tags}
        sx={{ ...mrStyle, width: '300px' }}
        limitTags={2}
        renderInput={(params) => <TextField {...params} label="Search tags" />}
        loading={optionsLoading}
        onChange={(_, val) => dispatch(setTags(val))}
        value={filters.tags}
      />

      <Autocomplete
        options={options.categories}
        sx={{ width: '200px' }}
        renderInput={(params) => (
          <TextField {...params} label="Search categories" />
        )}
        loading={optionsLoading}
        onChange={(_, val) => dispatch(setCategory(val ?? ''))}
        value={filters.category}
      />

      <Box sx={{ width: 300, ml: '1em' }}>
        <Typography gutterBottom sx={{ color: '#818181' }}>
          Missing ingredients threshold
        </Typography>

        <Slider
          shiftStep={9}
          step={3}
          marks
          min={0}
          max={9}
          valueLabelDisplay="auto"
          onChange={(_, value: number) => dispatch(setRange(value))}
          value={filters.range}
        />
      </Box>
    </Box>
  );
};
