import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function GridComponent() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "aqua",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={3}>
          <Paper style={{ width: 100, height: 150 }} />
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper style={{ width: 100, height: 150 }} />
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ width: 100, height: 150 }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default GridComponent;
