import React, { useContext, useState } from "react";
import { MatchContext } from "../../context/MatchContext";
import {
  Autocomplete,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Card from "../common/Card";
import {
  formatTimestamp,
  getStatusFromTimestamp,
  getTeamName,
} from "../../utils";

const MatchSchedule = () => {
  const { upcomingMatches, teams, addMatch, removeMatch } =
    useContext(MatchContext);
  const [open, setOpen] = useState(false);
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];

  const [matchDetails, setMatchDetails] = useState({
    venue: "",
    team1: null,
    team2: null,
    time: currentDate,
  });

  const isValid =
    matchDetails.venue &&
    matchDetails.team1 &&
    matchDetails.team2 &&
    matchDetails.time;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeHandler = (name, value) => {
    setMatchDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = () => {
    const data = {
      id: Math.ceil(Math.random() * 1000),
      team1_id: matchDetails.team1?.id,
      team2_id: matchDetails.team2?.id,
      scheduleTimeStamp: new Date(matchDetails.time).getTime(),
      venue: matchDetails.venue,
    };

    addMatch(data);
    handleClose();
  };

  const removeMatchHandler = (match) => {
    removeMatch(match);
  };

  return (
    <>
      <Grid container>
        <Grid xs={10}>
          <Box>
            <Typography variant="h4">Scheduled Matches</Typography>
          </Box>
        </Grid>

        <Grid xs={2}>
          <Button onClick={handleClickOpen} variant="contained">
            + Schedule new Match
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {upcomingMatches.length ? (
        <Box sx={{ mt: 4 }}>
          {upcomingMatches.map((up, i) => {
            return (
              <Card key={i} style={{ width: "90%", marginTop: "10px" }}>
                <Grid container>
                  <Grid xs={11}>
                    <Typography fontWeight={600} sx={{ mb: 2 }}>
                      {up.venue}
                    </Typography>
                  </Grid>
                  <Grid xs={1}>
                    <Chip
                      color="success"
                      sx={{ mb: 2 }}
                      label={getStatusFromTimestamp(up.scheduleTimeStamp)}
                    ></Chip>
                  </Grid>
                </Grid>
                <Typography marginBottom={2}>
                  <b>{getTeamName(up.team1_id, teams)}</b> VS{" "}
                  <b>{getTeamName(up.team2_id, teams)}</b>
                </Typography>

                <Typography>{formatTimestamp(up.scheduleTimeStamp)}</Typography>

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                >
                  <Button  variant="outlined" color="error" onClick={() => removeMatchHandler(up)}>
                    Remove Match
                  </Button>
                </Box>
              </Card>
            );
          })}
        </Box>
      ) : (
        <Typography textAlign="center" marginTop={4} variant="subtitle1">
          There are not any matches scheduled
        </Typography>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule New Match</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The match will be schedule and status eg. Up Coming will be assign
            according to selected date. The Match will also be visible to
            Dashboard!.
          </DialogContentText>

          <Grid container spacing={3}>
            <Grid item xs={6} spacing={3}>
              <TextField
                sx={{ mt: 3 }}
                value={matchDetails.venue}
                autoFocus
                margin="dense"
                label="Enter Venue Name"
                fullWidth
                onChange={(e) => onChangeHandler("venue", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ mt: 3 }}
                value={matchDetails.time}
                autoFocus
                margin="dense"
                label="Schedule Time"
                fullWidth
                type="date"
                inputProps={{
                  min: today,
                }}
                onChange={(e) => onChangeHandler("time", e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ my: 2, mt: 0 }} spacing={3}>
            <Grid item xs={5.5}>
              <Autocomplete
                value={matchDetails.team1}
                fullWidth
                onChange={(_, v) => onChangeHandler("team1", v)}
                disablePortal
                id="combo-box-demo"
                options={teams.filter((t) => t.id !== matchDetails.team2?.id)}
                getOptionLabel={(o) => o.name}
                renderInput={(params) => (
                  <TextField {...params} label="Add Team" />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography>VS</Typography>
            </Grid>
            <Grid item xs={5.5}>
              <Autocomplete
                value={matchDetails.team2}
                fullWidth
                onChange={(_, v) => onChangeHandler("team2", v)}
                disablePortal
                id="combo-box-demo"
                options={teams.filter((t) => t.id !== matchDetails.team1?.id)}
                getOptionLabel={(o) => o.name}
                renderInput={(params) => (
                  <TextField {...params} label="Add Team" />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={!isValid}
            variant="contained"
            onClick={onSubmitHandler}
          >
            Schedule
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MatchSchedule;
