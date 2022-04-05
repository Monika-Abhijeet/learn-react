import React from "react";
import { useReducer } from "react";

function UseReducerTutorial() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: "block" };
      case "DECREMENT":
        return { count: state.count - 1, showText: "none" };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: "none",
    name: "Monika",
  });

  return (
    <div>
      <div>Count value is {state.count}</div>
      <h2 style={{ display: state.showText }}>
        Text is being displayed during increment
      </h2>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default UseReducerTutorial;
