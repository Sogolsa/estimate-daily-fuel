import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // FormHelperText,
} from "@mui/material";

const GenderSelect = ({ value, onChange }) => {
  return (
    <FormControl variant="standard" margin="dense">
      <InputLabel id="gender-label">Gender</InputLabel>
      <Select
        labelId="gender-label"
        id="gender"
        name="gender"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="male">Male</MenuItem>
      </Select>
      {/* {error && (
        <FormHelperText>
          This field is required for calculating Protein!
        </FormHelperText>
      )} */}
    </FormControl>
  );
};

export default GenderSelect;
