import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { CharacterCard } from './CharacterCard';
import { CharacterContext } from '../context/CharacterContext';
import LoadingButton from '@mui/lab/LoadingButton';

export const Characters = () => {
  const { characterData, loading, getData, loadMore, handleSort } =
    useContext(CharacterContext);
  const [sort, setSort] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    handleSort(sort);
  }, [sort, handleSort]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container sx={{ py: 4 }}>
      {characterData && (
        <>
          <Typography sx={{ mb: 4 }}>
            {`Showing ${characterData.characters.length} results of ${characterData.count}`}
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: 120, mb: 4 }}>
            <InputLabel id="character-sort">Sort By</InputLabel>
            <Select
              labelId="character-sort-label"
              id="character-sort"
              value={sort}
              onChange={handleSortChange}
              label="Sort By"
              variant="outlined"
              color="warning"
            >
              <MenuItem value={'A-Z'}>A-Z</MenuItem>
              <MenuItem value={'Z-A'}>Z-A</MenuItem>
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
          </FormControl>
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
