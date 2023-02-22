import * as React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../navbar';

interface LayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'secondary.main' }}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
