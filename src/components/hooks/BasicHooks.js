import React from "react";
import { useState, useReducer } from "react";

// function BasicHook() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h4>Count is {count}</h4>
//       <button className="btn btn-secondary" onClick={increment}>
//         increment
//       </button>
//     </div>
//   );
// }

function BasicHook() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        console.log("inc", state);
        return { count: state.count + 1 };
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENt" });
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default BasicHook;
