import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ id, label }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "element",
    item: { id, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="draggable-item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {label}
    </div>
  );
};

export default DraggableItem;
