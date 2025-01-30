import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from "@mui/material";

const LevelSelect = ({ value, onChange }) => {
  return (
    <FormControl variant="standard" margin="dense">
      <InputLabel id="level-label">Level</InputLabel>
      <Select
        labelId="level-label"
        id="level"
        name="level"
        onChange={onChange}
        value={value}
      >
        <MenuItem value="beginner">
          <ListItemText primary="Beginner" />
        </MenuItem>
        <MenuItem value="intermediate">
          <ListItemText primary="Intermediate" />
        </MenuItem>
        <MenuItem value="advanced">
          <ListItemText primary="Advanced" secondary="Competition Level" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LevelSelect;
