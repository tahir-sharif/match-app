import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Card from "../common/Card";
import { MatchContext } from "../../context/MatchContext";

const TeamSetup = () => {
  const { teams, players, addPlayer, removePlayer } = useContext(MatchContext);
  const availablePlayers = players.filter((p) => p.teamId === null);

  const getTeamsPlayers = (team) => {
    const teamId = team.id;
    return players.filter((p) => p.teamId === teamId);
  };

  const addPlayerToTeam = (team, player) => {
    if (player) {
      addPlayer(team.id, player.id);
    }
  };

  const removePlayerFromTeam = (team, player) => {
    if (player) {
      removePlayer(team.id, player.id);
    }
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid xs={8.5}>
        <Box sx={{ p: 2, pt: 0 }}>
          <Typography variant="h5">Teams {`(${teams.length})`}</Typography>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", mt: 2, flexWrap: "wrap" }}>
            {teams.length ? (
              teams.map((t, i) => {
                const currentTeamPlayers = getTeamsPlayers(t);
                const isDisabled = currentTeamPlayers.length < 2;
                return (
                  <Card
                    style={{
                      width: "49%",
                    }}
                    heading={t.name}
                    key={i}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        minHeight: "100px",
                      }}
                    >
                      {currentTeamPlayers.map((p) => {
                        return (
                          <Card
                            style={{
                              border: "1px solid gray",
                              width: "47%",
                            }}
                            key={i}
                          >
                            <Typography fontWeight={500} marginBottom={2}>
                              {p.name}
                            </Typography>
                            <Button
                              size="small"
                              variant="outlined"
                              color="error"
                              disabled={isDisabled}
                              onClick={() => {
                                removePlayerFromTeam(t, p);
                              }}
                              fullWidth
                            >
                              Remove Player
                            </Button>
                          </Card>
                        );
                      })}

                      {isDisabled && (
                        <Typography sx={{ mt: 2, color: "orange" }}>
                          Every Team must have at least 1 player
                        </Typography>
                      )}

                      <Box sx={{ mt: 3, width: 1 }}>
                        <Autocomplete
                          fullWidth
                          onChange={(_, p) => addPlayerToTeam(t, p)}
                          disablePortal
                          id="combo-box-demo"
                          options={availablePlayers}
                          getOptionLabel={(o) => o.name}
                          renderInput={(params) => (
                            <TextField {...params} label="Add Players" />
                          )}
                        />
                      </Box>
                    </Box>
                  </Card>
                );
              })
            ) : (
              <Typography>There is no Available Team</Typography>
            )}
          </Box>
        </Box>
      </Grid>
      <Grid xs={0.2}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid xs={3}>
        <Box sx={{ p: 2, pt: 0 }}>
          <Typography variant="h5">Available Players</Typography>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", mt: 2, flexWrap: "wrap", gap: "4px" }}>
            {availablePlayers.length ? (
              availablePlayers.map((p, i) => {
                return (
                  <Card
                    style={{
                      width: "45%",
                    }}
                    key={i}
                  >
                    <Typography fontWeight={600} marginBottom={2}>
                      {p.name}
                    </Typography>

                    <Typography variant="caption">
                      Player is available
                    </Typography>
                  </Card>
                );
              })
            ) : (
              <Typography>There is no Available Player</Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TeamSetup;
