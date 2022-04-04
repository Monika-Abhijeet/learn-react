import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function ButtonStyled() {
  const useStyles = makeStyles({
    customClass: {
      border: 0,
      borderRadius: "10px",
      color: "white",
      padding: "15px",
      background: "red",
    },
    testDemo: {
      border: 0,
      borderRadius: "50px",
      color: "white",
      padding: "30px",
      background: "green",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Button className={classes.customClass}>test Button</Button>
      <Button className={classes.testDemo}>test Button</Button>
    </div>
  );
}

export default ButtonStyled;
