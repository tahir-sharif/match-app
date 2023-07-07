import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Card from "../common/Card";
import Players from "./Players";
import PlayerDetails from "./PlayerDetails";
import { upcomingMatches } from "../../data/upcomingMatches";
import { MatchContext } from "../../context/MatchContext";

const Dashboard = () => {
  const { teams, players } = useContext(MatchContext);

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
              <Card
                heading="Wins"
                style={{ flex: 1, fontSize: "30px", color: "green" }}
              >
                {selectedTeam.stats.wins}
              </Card>
              <Card
                heading="Losses"
                style={{ flex: 1, fontSize: "30px", color: "red" }}
              >
                {selectedTeam.stats.losses}
              </Card>
              <Card
                heading="Goals Scored"
                style={{ flex: 1, fontSize: "30px", color: "green" }}
              >
                {selectedTeam.stats.goalsScored}
              </Card>
              <Card
                heading="Goals Conceded"
                style={{ flex: 1, fontSize: "30px", color: "green" }}
              >
                {selectedTeam.stats.goalsConceded}
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
            {upcomingMatches.map((up, i) => {
              return (
                <Card key={i} heading={up.venue} style={{ width: "100%" }}>
                  <Typography marginBottom={2}>
                    <b>{up.team1}</b> VS <b>{up.team2}</b>
                  </Typography>

                  <Typography>
                    {up.date} - {up.time}
                  </Typography>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
