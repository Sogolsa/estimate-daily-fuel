import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from "@mui/material";

const ActivityLevelSelect = ({ value, onChange, errors }) => {
  return (
    <FormControl variant="standard" margin="dense">
      <InputLabel id="activity-level-label">Activity Level</InputLabel>
      <Select
        labelId="activity-level-label"
        id="activityLevel"
        name="activityLevel"
        onChange={onChange}
        value={value}
      >
        <MenuItem value="lightly-active">
          <ListItemText primary="Lightly Active" secondary="< 3 hrs /week" />
        </MenuItem>
        <MenuItem value="moderately-active">
          <ListItemText primary="Moderately Active" secondary="3-7 hrs/week" />
        </MenuItem>
        <MenuItem value="highly-active">
          <ListItemText primary="Highly Active" secondary="> 7 hrs/week" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ActivityLevelSelect;
