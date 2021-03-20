import React from "react";
import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
