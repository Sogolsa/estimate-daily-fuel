import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  Tooltip,
  TextField,
  Button,
} from "@mui/material";
import { estimateCalorieRange } from "../helpers/estimateCalorieRange";

const MyForm = () => {
  const [formData, setFormData] = useState({
    activityLevel: "",
    goal: "",
    activityType: "",
    currentWeight: "",
    sex: "",
  });

  const [calorieRange, setCalorieRange] = useState(null);

  const handleCalculate = () => {
    try {
      const result = estimateCalorieRange({
        activityLevel: formData.activityLevel,
        goal: formData.goal,
        currentWeight: parseFloat(formData.currentWeight),
      });
      setCalorieRange(result);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              Estimate your daily calories and macros here!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                padding: 2,
                mt: 2,
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
              }}
            >
              <FormControl fullWidth variant="filled" margin="dense">
                <InputLabel id="activity-level-label">
                  Activity Level
                </InputLabel>
                <Select
                  labelId="activity-level-label"
                  id="activityLevel"
                  name="activityLevel"
                  onChange={handleChange}
                  value={formData.activityLevel}
                >
                  <MenuItem value="lightly-active">
                    <ListItemText
                      primary="Lightly Active"
                      secondary="< 3 hrs /week"
                    />
                  </MenuItem>
                  <MenuItem value="moderately-active">
                    <ListItemText
                      primary="Moderately Active"
                      secondary="3-7 hrs/week"
                    />
                  </MenuItem>
                  <MenuItem value="highly-active">
                    <ListItemText
                      primary="Highly Active"
                      secondary="> 7 hrs/week"
                    />
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="filled" margin="dense">
                <InputLabel id="goal-label">Goal</InputLabel>
                <Select
                  labelId="goal-label"
                  id="goal"
                  name="goal"
                  onChange={handleChange}
                  value={formData.goal}
                >
                  <MenuItem value="fat-loss">
                    Fat Loss/ Body Recomposition
                  </MenuItem>
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
              <FormControl fullWidth variant="filled" margin="dense">
                <InputLabel id="activity-type-label">Activity Type</InputLabel>
                <Select
                  labelId="activity-type-label"
                  id="activityType"
                  name="activityType"
                  onChange={handleChange}
                  value={formData.activityType}
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
              <TextField
                label="Current Weight in pounds"
                id="currentWeight"
                name="currentWeight"
                type="number"
                variant="filled"
                margin="dense"
                value={formData.currentWeight}
                onChange={handleChange}
                fullWidth
              />
              <FormControl fullWidth variant="filled" margin="dense">
                <InputLabel id="sex-label">Sex</InputLabel>
                <Select
                  labelId="sex-label"
                  id="sex"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleCalculate}
                sx={{
                  mt: 2,
                  padding: 1.5,
                  backgroundColor: "#fa4454",
                  color: "#fff",
                  fontSize: "1em",
                }}
              >
                Calculate
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {calorieRange && calorieRange.lower && calorieRange.upper && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  mt: 2,
                  p: 2,
                  border: "1px solid #ccc",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#fa4454", textAlign: "center" }}
                >
                  Estimated Calories:
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "white", textAlign: "center" }}
                >
                  {calorieRange.lower} - {calorieRange.upper}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MyForm;
