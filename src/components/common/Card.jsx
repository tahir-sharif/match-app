import React from "react";
import "./card.css";
import { Typography } from "@mui/material";

const Card = ({ children, heading, ...otherP }) => {
  return (
    <div {...otherP} className="card">
      {heading && <Typography fontWeight={600} sx={{ mb: 2 }}>{heading}</Typography>}
      {children}
    </div>
  );
};

export default Card;
