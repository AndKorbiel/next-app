import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { drawerWidth } from '../constants';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';

const availableProducts = [
  'Potatoes',
  'Carrot',
  'Oil',
  'Ham',
  'Cheese',
  'Apples',
  'Onion',
  'Milk',
];

export const Sidebar = () => {
  return (
    <>
      <Drawer
        sx={{
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
        }}
        variant="permanent"
        anchor="left"
      >
        <Container>
          <Typography variant="h6">Choose available products</Typography>

          <Box>
            <FormGroup>
              {availableProducts.map((product, index) => (
                <FormControlLabel
                  control={<Checkbox />}
                  label={product}
                  key={index}
                />
              ))}
            </FormGroup>
          </Box>
        </Container>
        <Divider sx={{ borderColor: '#fff', margin: '1em 0' }} />

        <Container>
          <Typography variant="h6" sx={{ mb: ' 1em' }}>
            Add new product
          </Typography>
          <TextField variant="standard" placeholder="Type product name..." />
          <Button variant="contained">Submit</Button>
        </Container>

        <Divider sx={{ borderColor: '#fff', margin: '2em 0' }} />
      </Drawer>
    </>
  );
};
