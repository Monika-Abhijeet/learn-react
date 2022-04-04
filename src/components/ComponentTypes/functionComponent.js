import React from "react";
import ChildComponent from "./childComponent";

function FunctionComponent() {
  function onGreet() {
    alert("Hello Good morning");
  }
  function onWelcome() {
    console.log("welcome all");
  }
  return (
    <div>
      <h1>this is a functional component</h1>
      <ChildComponent
        title="this is a child from functional component"
        name="Monika"
        greet1="hello good morning"
        greet={onGreet}
        sayHello={onWelcome}
      ></ChildComponent>
    </div>
  );
}

export default FunctionComponent;
