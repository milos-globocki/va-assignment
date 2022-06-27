import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [source, setSource] = React.useState('10');

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
          <MenuItem value={10}>DZOMBA TV</MenuItem>
          <MenuItem value={20}>RADIO-TALASI STASA</MenuItem>
          <MenuItem value={30}>24H KEBAB FITNES SOMA</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}