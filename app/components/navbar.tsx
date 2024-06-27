'use client';

import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AppBar, Box, styled } from '@mui/material';

import Link from 'next/link';
import { routesMap } from '../constants';

const StyledAppBar = styled(AppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;

export const Navbar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Next App
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {routesMap.map((route) => (
            <Link href={route.path} key={route.path}>
              <Button sx={{ color: '#fff' }}>{route.name}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
