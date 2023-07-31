import React from 'react';
import { Container, Grid } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { CharacterCard } from './CharacterCard';

export const Characters = ({ characterData, loading }) => {
  return (
    <Container sx={{ py: 4 }}>
      {loading && <CircularProgress color="warning" />}
      {!loading && characterData && (
        <Grid container spacing={2}>
          {characterData.characters.map((character, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CharacterCard
                key={character.name}
                name={character.name}
                isOdd={index % 2 === 0}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
