'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  removeProductFromSelected,
  selectProducts,
} from '../../store/productsSlice';

export const SelectedProductsList = () => {
  const { selectedProducts } = useAppSelector(selectProducts);
  const dipsatch = useAppDispatch();

  return (
    <Box>
      {selectedProducts.map(({ name, id }) => (
        <Chip
          label={name}
          onDelete={() => dipsatch(removeProductFromSelected({ id, name }))}
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
