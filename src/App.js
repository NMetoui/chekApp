import logo from "./logo.svg";
import "./App.css";
import { userState } from "react";
import { useState, useEffect } from "react";
import Loding from "./components/Loding";
import axios from "axios";
import UserList from "./components/UserList";
function App() {
  const [userlists, setUserLists] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUserLists(result.data);
    });
  }, []);
  return (
    <div className="App">
      {userlists ? <UserList userlists={userlists} /> : <Loding />}
    </div>
  );
}

export default App;
