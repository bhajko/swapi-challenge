import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CharacterCard = ({ name, isOdd }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={isOdd ? '/assets/mock-image-1.png' : '/assets/mock-image.png'}
        title="green iguana"
      />
      <CardContent>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
