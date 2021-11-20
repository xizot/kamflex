import { Box, Typography } from '@material-ui/core';

import React from 'react';
import { Link } from 'react-router-dom';

function Banned() {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{ backgroundColor: '#131722' }}>
      <Typography variant="h3" color="primary">
        BANNED
      </Typography>

      <Link
        to="/logout"
        style={{
          marginTop: 20,
          color: '#fff',
          background: '#E30812',
          borderRadius: 4,
          padding: 5,
        }}>
        Logout
      </Link>
    </Box>
  );
}

export default Banned;
