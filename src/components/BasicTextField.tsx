import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField() {

  const [source] = React.useState('COVID');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="keyword-input" label="Input keyword" variant="outlined" value={source}/>
    </Box>
  );
}