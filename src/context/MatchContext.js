import React, { createContext, useState } from "react";
import { players } from "../data/players";
import { teams } from "../data/teams";
import { upcomingMatches } from "../data/upcomingMatches";

export const MatchContext = createContext();

export const MatchContextProvider = ({ children }) => {
  const [/*matchData, setMatchData*/] = useState({
    players,
    teams,
    upcomingMatches,
  });

  return (
    <MatchContext.Provider value={{ players, teams, upcomingMatches }}>
      {children}
    </MatchContext.Provider>
  );
};
