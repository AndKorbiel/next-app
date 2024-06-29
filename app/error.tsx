'use client';

import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box>
      <Typography variant="h3">Something went wrong!</Typography>
      <Button onClick={() => reset()} variant="contained" color="error">
        Try again
      </Button>
    </Box>
  );
}
