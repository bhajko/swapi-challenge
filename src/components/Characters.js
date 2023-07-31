import React, { useContext, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { CharacterCard } from './CharacterCard';
import { CharacterContext } from '../context/CharacterContext';
import LoadingButton from '@mui/lab/LoadingButton';

export const Characters = () => {
  const { characterData, loading, getData, loadMore } =
    useContext(CharacterContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      {characterData && (
        <>
          <Typography sx={{ mb: 4 }}>
            {`Showing ${characterData.characters.length} results of ${characterData.count}`}
          </Typography>
          <Grid container spacing={2}>
            {characterData.characters.map((character, index) => (
              <Grid key={character.name} item xs={12} sm={6} md={4} lg={3}>
                <CharacterCard name={character.name} isOdd={index % 2 === 0} />
              </Grid>
            ))}
          </Grid>
          {characterData.nextUrl && (
            <LoadingButton
              fullWidth
              onClick={loadMore}
              loading={loading}
              loadingIndicator="Loading…"
              variant="contained"
              color="warning"
              sx={{ mt: 4 }}
            >
              Load More
            </LoadingButton>
          )}
        </>
      )}
    </Container>
  );
};
