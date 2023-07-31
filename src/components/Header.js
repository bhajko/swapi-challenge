import React, { useContext } from 'react';
import { Box, Container, LinearProgress, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { CharacterContext } from '../context/CharacterContext';

const bgcolor = grey[900];

export const Header = () => {
  const { loading } = useContext(CharacterContext);
  return (
    <>
      <Container sx={{ bgcolor, py: 2 }} maxWidth={false}>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" sx={{ color: 'yellow' }}>
              Star Wars Character Search
            </Typography>
          </Box>
        </Container>
      </Container>
      {loading && <LinearProgress color="warning" />}
    </>
  );
};
