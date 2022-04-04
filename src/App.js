import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import ClassComponent from "./components/ComponentTypes/classComponent";
import FunctionComponent from "./components/ComponentTypes/functionComponent";
import Users from "./components/Users/Users";
import MaterialDesign from "./components/Material-ui/materialUi";
import Stylesheet from "./components/stylesheets/StyleSheet";
import Inline from "./components/stylesheets/Inline";
import "./components/stylesheets/appStyles.css";
import Styles from "./components/stylesheets/appStyle.module.css";
import Counter from "./components/Material-ui/counter";
function App() {
  return (
    <div className="App">
      <Header
        title="Learning basics of react from "
        tutor="Monika"
        bgColor="green"
        color="yellow"
      ></Header>
      {/* <h1 className="error">This is an error</h1>
      <h1 className={Styles.success}>This is an success message</h1> */}
      <Counter></Counter>
      {/* <Inline></Inline>
      <Stylesheet primary={false}></Stylesheet>
      <Stylesheet primary={true}></Stylesheet> */}

      {/* <MaterialDesign></MaterialDesign> */}
      {/* <Users></Users> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent></FunctionComponent> */}
    </div>
  );
}

export default App;
