import React from "react";
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

const MyForm = () => {
  return (
    <Container maxWidth="lg">
      <form>
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
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
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
                <Select labelId="goal-label" id="goal" name="goal">
                  <MenuItem value="fat-loss">
                    Fat Loss/ Body Recomposition
                  </MenuItem>
                  <MenuItem value="maintain-weight">
                    Maintenance / Improve Health
                  </MenuItem>
                  <Tooltip value="gain-weight" title="Gain Weight">
                    <MenuItem>
                      Muscle Gain / Support Athletic Performance
                    </MenuItem>
                  </Tooltip>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="filled" margin="dense">
                <InputLabel id="activity-type-label">Activity Type</InputLabel>
                <Select
                  labelId="activity-type-label"
                  id="activityType"
                  name="activityType"
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
                fullWidth
              />
              <FormControl fullWidth variant="filled" margin="dense">
                <InputLabel id="sex-label">Sex</InputLabel>
                <Select labelId="sex-label" id="sex" name="sex">
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: "#fa4454" }}
              >
                Calculate
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MyForm;
