import './global.css';

import { Navbar, Sidebar } from './components';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import StoreProvider from './storeProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex' }}>
          <StoreProvider>
            <Navbar />
            <Sidebar />

            <Container
              maxWidth={'xl'}
              sx={{ boxShadow: '0 3px 10px white', mt: '60px' }}
              className="main-container"
            >
              <Grid>{children}</Grid>
            </Container>
          </StoreProvider>
        </Box>
      </body>
    </html>
  );
}
