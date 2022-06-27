import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButton() {
  return (
    <Stack spacing={2} direction="row" sx={{ m: 1 }}>
      <Button id="submit-form" variant="contained">Submit</Button>
    </Stack>
  );
}
