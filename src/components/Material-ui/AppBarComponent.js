import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function AppBarComponent() {
  return (
    <AppBar color="secondary" elevation={0}>
      <ToolBar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h3" component="p">
          My React Demo
        </Typography>
        <Typography variant="subtitle1" component="p">
          Learn Basics of React
        </Typography>
        <button>Login</button>
      </ToolBar>
    </AppBar>
  );
}

export default AppBarComponent;
