import React, { Component } from "react";
import { useErrorHandler } from "react-error-boundary";

function Counter(props) {
  const MAX_COUNT_ALLOWED = 5;
  const [count, setCount] = React.useState(0);
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const handleError = useErrorHandler();
  function incrementCounter() {
    try {
      if (count === 5) {
        throw new Error("count limit exceeded");
      } else {
        setCount(count + 1);
      }
    } catch (e) {
      console.log(e);
      handleError(e);
    }
  }

  function addNum() {
    setResult(+num1 + +num2);
  }
  return (
    <div>
      <h1> {props.title}</h1>
      Counter value is new {count}
      <button onClick={incrementCounter}>increment</button>
      <label>num1</label>
      <input
        type="number"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      ></input>
      <label>num2</label>
      <input
        type="number"
        value={num2}
        onChange={(e1) => {
          setNum2(e1.target.value);
        }}
      ></input>
      <button onClick={addNum}>Add</button>
      <div>result is {result}</div>
    </div>
  );
}

export default Counter;
