import {
  Autocomplete,
  Box,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Card from "../common/Card";
import Players from "./Players";
import PlayerDetails from "./PlayerDetails";
import { MatchContext } from "../../context/MatchContext";
import {
  formatTimestamp,
  getStatusFromTimestamp,
  getTeamName,
} from "../../utils";

const Dashboard = () => {
  const { teams, players, upcomingMatches } = useContext(MatchContext);

  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const playersData = players.filter((p) => p.teamId === selectedTeam.id);

  const teamsOnChangeHandler = (_, value) => {
    if (value) {
      setSelectedTeam(value);
    }
  };

  const playerOnClickHandler = (player) => {
    setSelectedPlayer(player);
  };

  const playerExitHandler = (player) => {
    setSelectedPlayer(null);
  };

  return (
    <Grid container>
      <Grid item xs={8.5}>
        {selectedPlayer ? (
          <PlayerDetails
            selectedPlayer={selectedPlayer}
            playerExitHandler={playerExitHandler}
          />
        ) : (
          <>
            <Grid container>
              <Grid item xs={9}>
                <Box sx={{ pb: 3 }}>
                  <Typography variant="h4">
                    {selectedTeam.name}'s Team
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Autocomplete
                  onChange={teamsOnChangeHandler}
                  value={selectedTeam}
                  disablePortal
                  id="combo-box-demo"
                  options={teams}
                  getOptionLabel={(o) => o.name}
                  renderInput={(params) => (
                    <TextField {...params} label="Team" />
                  )}
                />
              </Grid>
            </Grid>
            <Divider />

            <Box sx={{ display: "flex", my: 2 }}>
              <Card heading="Wins" style={{ flex: 1, fontSize: "30px" }}>
                <Typography variant="h2" color={"green"}>
                  {selectedTeam.stats.wins}
                </Typography>
              </Card>
              <Card heading="Losses" style={{ flex: 1, fontSize: "30px" }}>
                <Typography variant="h2" color={"red"}>
                  {selectedTeam.stats.losses}
                </Typography>
              </Card>
              <Card
                heading="Goals Scored"
                style={{ flex: 1, fontSize: "30px" }}
              >
                <Typography variant="h2" color={"green"}>
                  {selectedTeam.stats.goalsScored}
                </Typography>
              </Card>
              <Card
                heading="Goals Conceded"
                style={{ flex: 1, fontSize: "30px" }}
              >
                <Typography variant="h2" color={"green"}>
                  {selectedTeam.stats.goalsConceded}
                </Typography>
              </Card>
            </Box>
            <Divider />

            <Box sx={{ my: 2 }}>
              <Players
                playerOnClickHandler={playerOnClickHandler}
                playersData={playersData}
              />
            </Box>
          </>
        )}
      </Grid>
      <Grid item xs={0.2}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ p: 2, pt: 0 }}>
          <Typography variant="h5">Upcoming Matches</Typography>

          <Box sx={{ mt: 2 }}>
            {upcomingMatches.length ? (
              upcomingMatches.map((up, i) => {
                return (
                  <Card
                    key={i}
                    heading={up.venue}
                    style={{ width: "100%" }}
                    right={
                      <Chip
                        color="success"
                        sx={{ mb: 2 }}
                        label={getStatusFromTimestamp(up.scheduleTimeStamp)}
                      ></Chip>
                    }
                  >
                    <Typography marginBottom={2}>
                      <b>{getTeamName(up.team1_id, teams)}</b> VS{" "}
                      <b>{getTeamName(up.team2_id, teams)}</b>{" "}
                    </Typography>

                    <Typography>
                      {formatTimestamp(up.scheduleTimeStamp)}
                    </Typography>
                  </Card>
                );
              })
            ) : (
              <Typography>There are not any upcoming matches</Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
