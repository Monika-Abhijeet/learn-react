import React from "react";
import UseEffectTutorial from "./useEffect";
import UseReducerTutorial from "./useReducerTutorial";
import UseStateTutorial from "./useStateTutorial";
import { useState } from "react";

function ReactParentHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Monika");

  return (
    <div>
      <h3 style={{ color: "red", fontWeight: 500 }}>UseState Demo</h3>
      <UseStateTutorial></UseStateTutorial>
      <h3 style={{ color: "red", fontWeight: 500 }}>UseReducer Demo</h3>
      <UseReducerTutorial></UseReducerTutorial>
      <h3 style={{ color: "red", fontWeight: 500 }}>UseEffect Demo</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName("Monika Abhijeet")}>Change name</button>
      <UseEffectTutorial counter={count} name={name}></UseEffectTutorial>
    </div>
  );
}

export default ReactParentHook;
