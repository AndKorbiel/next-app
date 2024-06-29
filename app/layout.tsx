import './global.css';

import { Navbar, Sidebar } from './components';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Sidebar />

          <Container
            maxWidth={'xl'}
            sx={{ boxShadow: '0 3px 10px white', mt: '60px' }}
            className="main-container"
          >
            <Grid>{children}</Grid>
          </Container>
        </Box>
      </body>
    </html>
  );
}
