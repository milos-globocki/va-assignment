import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [source, setSource] = React.useState('0');

  const handleChange = (event: SelectChangeEvent) => {
    setSource(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 80, maxWidth: 260 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Source</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={source}
          label="Source"
          onChange={handleChange}
        >

          {/* TODO: izlistaj ajteme sa bekenda ovdje */}
          <MenuItem value={0}>All sources</MenuItem>
          <MenuItem value={10}>Guardian</MenuItem>
          <MenuItem value={20}>BBC</MenuItem>
          <MenuItem value={30}>The Sun</MenuItem>
          <MenuItem value={40}>Daily Mail</MenuItem>
          <MenuItem value={50}>The Times</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}