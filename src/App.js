import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

// npm install --save react-chartjs-2 chart.js@2.9.4

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Grid";

const App = () => {
  return (
    <Paper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <BarChart />
          </Grid>
          <Grid item xs={5}>
            <LineChart />
          </Grid>
          <Grid item xs={5}>
            <BarChart />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default App;
