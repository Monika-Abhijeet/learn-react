import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [title, setTitle] = React.useState("This is my initial title");

  function changeTitle(title) {
    setTitle(title);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => changeTitle("my new title")}>change title</button>
      <button onClick={() => increment()}>increment</button>
      <h1>Count value is {count}</h1>
    </div>
  );
}

export default Counter;
