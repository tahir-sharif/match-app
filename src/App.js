import { Typography } from "@mui/material";
import Home from "./pages/Home";
import "./App.css";
import { MatchContextProvider } from "./context/MatchContext";

function App() {
  return (
    <MatchContextProvider>
      <div className="App">
        <Typography
          sx={{ py: 2, background: "#1976d2", color: "white", fontWeight: 600 }}
          textAlign="center"
          variant="subtitle1"
        >
          Interactive Dashboard and Match Visualization for Soccer Knockout
          League
        </Typography>

        <Home />
      </div>
    </MatchContextProvider>
  );
}

export default App;
