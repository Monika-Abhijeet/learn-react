import { blue } from "@material-ui/core/colors";
import { StylesContext } from "@material-ui/core/node_modules/@material-ui/styles";
import React from "react";

function Inline() {
  const heading = {
    fontSize: "72px",
    color: "blue",
  };
  return (
    <div>
      <h3 className="error"> This is a error</h3>
      <h3> This is a success</h3>

      <h1 style={heading}>Inline Element</h1>
    </div>
  );
}

export default Inline;
