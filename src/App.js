import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import "./index.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Sidebar />
        <Canvas />
      </div>
    </DndProvider>
  );
}

export default App;
