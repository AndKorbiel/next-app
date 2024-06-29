'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import { initialAvailableProducts } from '../../constants';

export const AvailableProductsList = () => {
  return (
    <Box>
      {initialAvailableProducts.map(({ name, id }) => (
        <Chip
          label={name}
          onClick={() => {}}
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
