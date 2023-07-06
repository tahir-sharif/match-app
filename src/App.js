import { Typography } from "@mui/material";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typography sx={{ my: 2 }} textAlign="center" variant="subtitle1">
        Interactive Dashboard and Match Visualization for Soccer Knockout League
      </Typography>

      <Home />
    </div>
  );
}

export default App;
