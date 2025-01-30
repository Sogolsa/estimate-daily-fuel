import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from "@mui/material";

const ActivityTypeSelect = ({ value, onChange }) => {
  return (
    <FormControl variant="standard" margin="dense">
      <InputLabel id="activity-type-label">Activity Type</InputLabel>
      <Select
        labelId="activity-type-label"
        id="activityType"
        name="activityType"
        onChange={onChange}
        value={value}
      >
        <MenuItem value="endurance">
          <ListItemText
            primary="Endurance"
            secondary="High-volume exercise (e.g., long-distance cycling or
              running)"
          />
        </MenuItem>
        <MenuItem value="strength">
          <ListItemText
            primary="Strength"
            secondary="Bodybuilding, explosive power, and conditioning"
          />
        </MenuItem>
        <MenuItem value="absolute-strength">
          <ListItemText
            primary="Absolute Strength"
            secondary="e.g., Powerlifting"
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ActivityTypeSelect;
