import React from 'react';
import { Typography, Grid } from '@mui/material';

function Footer() {
  return (
    <Grid container direction="column" alignItems="center" sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      py: 2,
      bgcolor: "#1e5288"
    }}>
      <Typography variant="body1" align="center" sx={{ color: "text.light" }}>
        © 2023 Company Name. All rights reserved.
      </Typography>
    </Grid>
  );
}

export default Footer;