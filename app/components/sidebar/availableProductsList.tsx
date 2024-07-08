'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addProductToSelected,
  selectProducts,
} from '../../store/productsSlice';

export const AvailableProductsList = () => {
  const { availableProducts } = useAppSelector(selectProducts);
  const dipsatch = useAppDispatch();

  return (
    <Box>
      {availableProducts.map(({ name, id }) => (
        <Chip
          label={name}
          onClick={() => dipsatch(addProductToSelected({ id, name }))}
          key={id}
          sx={{
            margin: '0 0.2em 0.2em 0',
            bgcolor: '#ebebeb',
          }}
        />
      ))}
    </Box>
  );
};
