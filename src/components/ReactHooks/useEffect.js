import React from "react";
import { useState, useEffect } from "react";

function UseEffectTutorial(props) {
  useEffect(() => {
    console.log("use effect is called");
  }, [props.counter]);
  return (
    <div>
      <h1>useeffect</h1>
      <h4>
        My name is {props.name} and count is {props.counter}
      </h4>
    </div>
  );
}

export default UseEffectTutorial;
