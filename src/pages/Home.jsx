import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dashboard from "../components/dasboard/Dashboard";
import TeamSetup from "../components/teamSetup/TeamSetup";
import MatchSchedule from "../components/matchSchedule/MatchSchedule";
import ScoreCard from "../components/scoreCard/ScoreCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Match Schedule" {...a11yProps(1)} />
        <Tab label="Team Setup" {...a11yProps(2)} />
        <Tab label="Scorecard " {...a11yProps(3)} />
      </Tabs>
      <Box sx={{ pt: 2 }}>
        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MatchSchedule />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TeamSetup />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ScoreCard />
        </TabPanel>
      </Box>
    </Box>
  );
}
