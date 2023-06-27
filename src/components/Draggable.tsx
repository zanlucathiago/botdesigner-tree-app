import React from 'react';

interface DraggableProps {
  name: string;
  onDragStart: (name: string) => void;
}

const Draggable = ({ name, children, onDragStart }: React.PropsWithChildren<DraggableProps>) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer?.setData('text/plain', name);
    onDragStart(name);
  };

  return <div draggable onDragStart={handleDragStart}>{children}</div>;
};

export default Draggable