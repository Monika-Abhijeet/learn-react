import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header
        title="Learning basics of react from "
        tutor="Monika"
        bgColor="green"
        color="yellow"
      ></Header>
      <Sidebar
        content="hello!! this a sidebar"
        bgColor="yellow"
        color="red"
      ></Sidebar>
      <Login></Login>
    </div>
  );
}

export default App;
