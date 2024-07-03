'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

import React from 'react';

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="contained"
      color="info"
      sx={{ mb: '1em' }}
      size="small"
    >
      Go back
    </Button>
  );
};
