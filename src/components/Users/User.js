import React from "react";

function User(props) {
  return (
    <div>
      This is a child with name as {props.name} and age is {props.age}{" "}
    </div>
  );
}

export default User;
