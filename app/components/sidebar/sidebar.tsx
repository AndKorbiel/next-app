import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { drawerWidth } from '../../constants';
import { Button, Container, Divider, TextField } from '@mui/material';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { StyledHeading } from './styledHeading';
import { AvailableProductsList } from './availableProductsList';
import { SelectedProductsList } from './selectedProductsList';

const drawerStyles = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: '#444444',
    color: '#fff',
    mt: '60px',
    pt: '40px',
  },
};

export const Sidebar = () => {
  return (
    <>
      <Drawer sx={drawerStyles} variant="permanent" anchor="left">
        <Container>
          <StyledHeading variant="h6">
            <ShoppingBasketIcon sx={{ mr: '0.5em' }} />
            Choose available products
          </StyledHeading>

          <AvailableProductsList />

          <Divider sx={{ borderColor: '#fff', margin: '1em 0' }} />
        </Container>

        <Container>
          <StyledHeading variant="h6" sx={{ mb: ' 1em' }}>
            <PlaylistAddIcon sx={{ mr: '0.5em' }} />
            Add new product to the list
          </StyledHeading>

          <TextField
            variant="standard"
            placeholder="Type product name..."
            sx={{
              height: '28px',
              padding: '4px 8px',
              bgcolor: '#ebebeb',
            }}
          />
          <Button variant="contained">Submit</Button>

          <Divider sx={{ borderColor: '#fff', margin: '2em 0' }} />
        </Container>

        <Container>
          <StyledHeading variant="h6" sx={{ mb: ' 1em' }}>
            <ChecklistIcon sx={{ mr: '0.5em' }} />
            Products you have
          </StyledHeading>

          <SelectedProductsList />
        </Container>
      </Drawer>
    </>
  );
};
