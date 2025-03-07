import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  FormHelperText,
} from "@mui/material";

const LevelSelect = ({ value, onChange, error }) => {
  return (
    <FormControl error={Boolean(error)} variant="standard" margin="dense">
      <InputLabel id="level-label">Level</InputLabel>
      <Select
        labelId="level-label"
        id="level"
        name="level"
        onChange={(e) =>
          onChange({ target: { name: "level", value: e.target.value } })
        }
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
      {error && (
        <FormHelperText>
          This field is required for calculating protein!
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default LevelSelect;
