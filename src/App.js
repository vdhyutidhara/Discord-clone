import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
