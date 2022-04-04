import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import ClassComponent from "./components/ComponentTypes/classComponent";
import FunctionComponent from "./components/ComponentTypes/functionComponent";
function App() {
  return (
    <div className="App">
      <Header
        title="Learning basics of react from "
        tutor="Monika"
        bgColor="green"
        color="yellow"
      ></Header>
      {/* <ClassComponent></ClassComponent> */}
      <FunctionComponent></FunctionComponent>
    </div>
  );
}

export default App;
