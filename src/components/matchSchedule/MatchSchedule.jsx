import React, { useContext } from "react";
import { MatchContext } from "../../context/MatchContext";

const MatchSchedule = () => {
  const { upcomingMatches } = useContext(MatchContext);

  return <div>Match Schedule</div>;
};

export default MatchSchedule;
