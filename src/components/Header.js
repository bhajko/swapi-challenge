import React from 'react';
import { Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const bgcolor = grey[900];

export const Header = () => {
  return (
    <Container sx={{ bgcolor, py: 2 }} maxWidth={false}>
      <Container>
        <Typography variant="h5" sx={{ color: 'yellow' }}>
          Star Wars Character Search
        </Typography>
      </Container>
    </Container>
  );
};
