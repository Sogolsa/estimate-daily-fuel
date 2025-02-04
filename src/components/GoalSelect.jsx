import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  FormHelperText,
} from "@mui/material";

const GoalSelect = ({ value, onChange, error }) => {
  return (
    <FormControl error={Boolean(error)} variant="standard" margin="dense">
      <InputLabel id="goal-label">Goal</InputLabel>
      <Select
        labelId="goal-label"
        id="goal"
        name="goal"
        onChange={onChange}
        value={value}
      >
        <MenuItem value="fat-loss">Fat Loss/ Body Recomposition</MenuItem>
        <MenuItem value="maintain-weight">
          Maintenance / Improve Health
        </MenuItem>
        <MenuItem value="gain-weight">
          <ListItemText
            primary="Muscle Gain / Support Athletic Performance"
            secondary="Gain Weight"
          />
        </MenuItem>
      </Select>
      {error && (
        <FormHelperText>
          This field is required to calculate calories!
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default GoalSelect;
