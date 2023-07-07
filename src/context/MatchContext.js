import React, { createContext, useState } from "react";
import { players } from "../data/players";
import { teams } from "../data/teams";
import { upcomingMatches } from "../data/upcomingMatches";

export const MatchContext = createContext();

export const MatchContextProvider = ({ children }) => {
  const [matchData, setMatchData] = useState({
    players,
    teams,
    upcomingMatches,
  });

  const updatePlayerId = (teamId, playerId) => {
    const newPlayers = [...players];
    const FP = newPlayers.find((p) => p.id === playerId);
    FP.teamId = teamId;

    setMatchData((prev) => ({
      ...prev,
      players: newPlayers,
    }));
  };

  const addPlayer = (teamId, playerId) => {
    updatePlayerId(teamId, playerId);
  };

  const removePlayer = (teamId, playerId) => {
    updatePlayerId(null, playerId);
  };

  return (
    <MatchContext.Provider value={{ ...matchData, addPlayer, removePlayer }}>
      {children}
    </MatchContext.Provider>
  );
};
