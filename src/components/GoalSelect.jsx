import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material";

const GoalSelect = ({ value, onChange }) => {
  return (
    <FormControl variant="standard" margin="dense">
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
          <Tooltip title="Gain Weight">
            <span>Muscle Gain / Support Athletic Performance</span>
          </Tooltip>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default GoalSelect;
