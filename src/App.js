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
import { Checkbox, Typography } from "@material-ui/core";
import CheckboxExample from "./components/Material-ui/Checkbox";
import ButtonStyled from "./components/Material-ui/makeStyles";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import ContainerExample from "./components/Material-ui/Container";
import GridComponent from "./components/Material-ui/GridComponent";
import AppBarComponent from "./components/Material-ui/AppBarComponent";
import ParentComp from "./components/PureComponentDemo/ParentComponent";
import ParentError from "./components/ErrorHandling/parentError";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[100],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <div className="App">
      <ParentError></ParentError>
      {/* <ParentComp></ParentComp> */}
      {/* App bar component => appbar shoul always have toolbar */}
      {/* <AppBarComponent></AppBarComponent> */}
      {/* <GridComponent></GridComponent> */}
      {/* <ContainerExample></ContainerExample> */}
      {/* <AppExample></AppExample> */}
      {/* <GridComponent></GridComponent> */}

      {/* material ui demo */}
      {/* <ThemeProvider theme={theme}>
        <Header
          title="Learning basics of react from "
          tutor="Monika"
          bgColor="green"
          color="yellow"
        ></Header>
        <ButtonStyled></ButtonStyled>
        <h2>Testing typography</h2>
        <Button variant="contained" color="secondary" size="small">
          Click me
        </Button>
        <Button variant="contained" color="primary">
          Click me
        </Button>
        <Button variant="contained" color="secondary" size="large">
          Click me
        </Button> */}
      {/* <h1 className="error">This is an error</h1>
      <h1 className={Styles.success}>This is an success message</h1> */}
      {/* <Counter></Counter>
      <CheckboxExample></CheckboxExample> */}
      {/* <Inline></Inline>
      <Stylesheet primary={false}></Stylesheet>
      <Stylesheet primary={true}></Stylesheet> */}

      {/* <MaterialDesign></MaterialDesign> */}
      {/* <Users></Users> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent></FunctionComponent> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
