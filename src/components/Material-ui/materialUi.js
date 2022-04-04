import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { BusinessTwoTone } from "@material-ui/icons";

function MaterialDesign() {
  return (
    <div>
      <h1>This is a Material Design demo</h1>
      {/* <Button variant="contained" color="secondary" size="small">
        Click me
      </Button>
      <Button variant="contained" color="secondary">
        Click me
      </Button>
      <Button variant="outlined" color="secondary" size="large">
        Click me
      </Button> */}
      <ButtonGroup variant="outlined" color="primary">
        <Button endIcon={<SaveIcon />}>Save</Button>
        <Button endIcon={<DeleteIcon />}>Delete</Button>
        <Button endIcon={<AlarmIcon />}>Set Alarm</Button>
      </ButtonGroup>
    </div>
  );
}

export default MaterialDesign;
