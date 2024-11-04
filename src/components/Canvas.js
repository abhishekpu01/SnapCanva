import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Stage, Layer, Rect, Text } from "react-konva";

const GRID_SIZE = 60;

const Canvas = () => {
  const [elements, setElements] = useState([]);

  const [, drop] = useDrop({
    accept: "element",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      const canvasBounds = document.querySelector(".canvas").getBoundingClientRect();

      // Check if the drop position is within canvas boundaries
      if (
        offset.x >= canvasBounds.left &&
        offset.x <= canvasBounds.right &&
        offset.y >= canvasBounds.top &&
        offset.y <= canvasBounds.bottom
      ) {
        // Calculate the nearest grid position within canvas bounds
        const x = Math.round((offset.x - canvasBounds.left) / GRID_SIZE) * GRID_SIZE;
        const y = Math.round((offset.y - canvasBounds.top) / GRID_SIZE) * GRID_SIZE;

        setElements((prev) => [...prev, { ...item, x, y }]);
      }
    },
  });

  return (
    <div ref={drop} className="canvas">
      <Stage width={window.innerWidth - 250} height={window.innerHeight - 50}>
        <Layer>
          {/* Draw Grid */}
          {[...Array(Math.ceil((window.innerWidth - 250) / GRID_SIZE))].map((_, i) => (
            <Rect key={`v-${i}`} x={i * GRID_SIZE} y={0} width={1} height={window.innerHeight} fill="#e0e0e0" />
          ))}
          {[...Array(Math.ceil(window.innerHeight / GRID_SIZE))].map((_, i) => (
            <Rect key={`h-${i}`} x={0} y={i * GRID_SIZE} width={window.innerWidth} height={1} fill="#e0e0e0" />
          ))}

          {/* Render Elements */}
          {elements.map((element, index) => (
            <Text
              key={index}
              text={element.label}
              x={element.x}
              y={element.y}
              draggable
              onDragEnd={(e) => {
                const newX = Math.round(e.target.x() / GRID_SIZE) * GRID_SIZE;
                const newY = Math.round(e.target.y() / GRID_SIZE) * GRID_SIZE;
                const updatedElements = [...elements];
                updatedElements[index] = { ...updatedElements[index], x: newX, y: newY };
                setElements(updatedElements);
              }}
              fontSize={16}
              fill="#333"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
