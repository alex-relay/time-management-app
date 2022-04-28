import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entries from "./components/Entries";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <Entries />
    </div>
  );
};

export default App;
