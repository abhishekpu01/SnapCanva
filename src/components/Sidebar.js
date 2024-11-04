import React from "react";
import DraggableItem from "./DraggableItem";

const Sidebar = () => {
  const elements = [
    { id: "progress", label: "Progress Bar" },
    { id: "questionText", label: "Question Text" },
    { id: "options", label: "Options" },
    { id: "image", label: "Image" },
  ];

  return (
    <div className="sidebar">
      <h2>Elements</h2>
      {elements.map((el) => (
        <DraggableItem key={el.id} id={el.id} label={el.label} />
      ))}
    </div>
  );
};

export default Sidebar;
