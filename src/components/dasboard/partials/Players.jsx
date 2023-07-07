import React, { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Players({ playerOnClickHandler, playersData = [] }) {
  return (
    <>
      <Typography marginBottom={2} variant="h5">
        Players
      </Typography>
      <Typography marginBottom={1} variant="subtitle2">
        {"(click on player to see his details)"}{" "}
      </Typography>
      <List>
        {playersData.map((player, i) => {
          return (
            <Fragment key={i}>
              <ListItem
                key={i}
                onClick={() => {
                  playerOnClickHandler(player);
                }}
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  "&:hover": { background: "#f9f9f9" },
                  background: "white",
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="P" />
                </ListItemAvatar>
                <ListItemText primary={player.name} />
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </>
  );
}
