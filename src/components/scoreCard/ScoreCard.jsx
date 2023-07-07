import React, { useContext } from "react";
import { MatchContext } from "../../context/MatchContext";
import Card from "../common/Card";
import { Box, Divider, Grid, Typography } from "@mui/material";

const ScoreCard = () => {
  const { players } = useContext(MatchContext);

  return (
    <Box>
      <Typography variant="h4">Player Score Card</Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={3}>
        {players.map((player) => (
          <Grid item xs={12} md={6}>
            <Card style={{ width: "100%" }} key={player.id}>
              <Typography fontWeight={600} marginBottom={1} variant="h5">
                {player.name}
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">
                    Goals: {player.stats.goals}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">
                    Assists: {player.stats.assists}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">
                    Yellow Cards: {player.stats.yellowCards}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">
                    Red Cards: {player.stats.redCards}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScoreCard;
