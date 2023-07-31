import React, { useContext, useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { CharacterContext } from '../context/CharacterContext';

export const Search = () => {
  const [query, setQuery] = useState('');
  const { getSingleData } = useContext(CharacterContext);

  const handleSearch = async () => {
    await getSingleData(query);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          label="Search Character"
          variant="outlined"
          color="warning"
          sx={{ width: { xs: 1, md: '500px' } }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 2, width: { xs: 1, md: '200px' } }}
          onClick={handleSearch}
        >
          Search Character
        </Button>
      </Box>
    </Container>
  );
};
