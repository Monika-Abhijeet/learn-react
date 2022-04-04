import React from "react";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
function CheckboxExample() {
  // CHECKED = TRUE
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = React.useState("");
  function setMyCheckbox(event) {
    console.log(" on change method called");
    setChecked(event.target.checked);
  }

  return (
    <div>
      <TextField
        variant="outlined"
        color="secondary"
        type="text"
        value={name}
        label="Enter Name"
        placeholder="name in caps"
        onChange={(e) => setName(e.target.value)}
      />
      <FormControlLabel
        control={
          <CheckBox
            checked={checked}
            onChange={(e) => setMyCheckbox(e)}
            color="secondary"
            inputProps={{ "aria-label": "primary checkbox" }}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
          />
        }
        label="Agree to terms and condition"
      ></FormControlLabel>
    </div>
  );
}

export default CheckboxExample;
