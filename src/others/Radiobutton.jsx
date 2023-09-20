import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Radiobutton() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Organization Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
        <FormControlLabel value="trainee" control={<Radio />} label="Trainee" />
        <FormControlLabel value="Headapplicant" control={<Radio />} label="Headofficer" />
       
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
  );
}