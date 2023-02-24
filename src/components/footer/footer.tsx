import { Box, Typography } from '@mui/material';
import * as React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: '4rem',
        bgcolor: 'rgba(0,0,0, .1)',
      }}
    >
      <Typography sx={{ color: 'secondary.contrastText' }}>
        2023 Brought by WDAVID
      </Typography>
    </Box>
  );
};

export default Footer;
