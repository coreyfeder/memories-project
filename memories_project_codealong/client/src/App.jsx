import React from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import memories from "./images/memories.png";

function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
          <img src={memories} alt="memories" height="60%" />
        </Typography>
      </AppBar>
    </Container>
  )
}

export default App
