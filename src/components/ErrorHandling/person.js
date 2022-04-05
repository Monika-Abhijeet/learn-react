import React from "react";

function PersonComp(props) {
  return (
    <div>
      My name is {props.person.firstName} {props.person.lastName}
    </div>
  );
}

export default PersonComp;
