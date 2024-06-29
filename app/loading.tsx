import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box>
      <Typography variant="h3">Loading in progress...</Typography>
      <AutorenewIcon fontSize="large" />
    </Box>
  );
}
