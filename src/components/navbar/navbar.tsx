import { iconsNavbarStyles } from '@/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Fade, IconButton, Zoom } from '@mui/material';
import { useColorMode } from 'mui-theme-pack';

const Navbar = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: {
          xs: 'center',
          sm: 'center',
          md: 'right',
          lg: 'right',
        },
        bgcolor: 'secondary.main',
        alignContent: 'center',
        alignItems: 'center',
        height: {
          xs: '5rem',
          sm: '5rem',
          md: '8rem',
          lg: '8rem',
        },
      }}
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label="Example"
        sx={{
          marginRight: {
            xs: 0,
            sm: 0,
            md: '3rem',
            lg: '3rem',
          },
        }}
      >
        {mode === 'light' ? (
          <Fade in={mode === 'light'}>
            <DarkModeIcon sx={iconsNavbarStyles} />
          </Fade>
        ) : (
          <Zoom in={mode === 'dark'}>
            <LightModeIcon sx={iconsNavbarStyles} />
          </Zoom>
        )}
      </IconButton>
    </Box>
  );
};

export default Navbar;
