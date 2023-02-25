import { Box, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
        bgcolor: 'rgba(0,0,0,.1)',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: 'secondary.contrastText' }}>
          2023 Brought by WDAVID
        </Typography>
      </Box>
      <IconButton
        href="https://github.com/wdavidcalsin/image-searcher"
        target={'_blank'}
      >
        <GitHubIcon sx={{ color: 'secondary.contrastText' }} />
      </IconButton>
    </Box>
  );
};

export default Footer;
