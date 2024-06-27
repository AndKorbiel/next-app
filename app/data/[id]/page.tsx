import { Typography } from '@mui/material';
import React from 'react';

export default function DataPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <div>
        <Typography variant="h3">Hello worldsss - id: {params.id}</Typography>
      </div>
    </main>
  );
}
