import React from "react";
import "./card.css";
import { Grid, Typography } from "@mui/material";

const Card = ({ children, heading, right, ...otherP }) => {
  return (
    <div {...otherP} className="card">
      {(heading || right) && (
        <Grid container>
          <Grid item xs={8}>
            {heading && (
              <Typography fontWeight={600} sx={{ mb: 2 }}>
                {heading}
              </Typography>
            )}
          </Grid>
          <Grid item xs={4}>
            {right}
          </Grid>
        </Grid>
      )}

      {children}
    </div>
  );
};

export default Card;
