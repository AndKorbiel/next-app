import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AppBar, Box } from '@mui/material';

import Link from 'next/link';
import { routesMap } from '../constants';

export const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 9999 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Recipes Matcher
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {routesMap.map((route) => (
            <Link href={route.path} key={route.path}>
              <Button sx={{ color: '#fff' }}>{route.name}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
