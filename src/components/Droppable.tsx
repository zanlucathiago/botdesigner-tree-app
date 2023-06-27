interface DroppableProps {
  onDrop: () => void;
}

const Droppable = ({ onDrop, children }: React.PropsWithChildren<DroppableProps>) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onDrop();
  };

  return <div onDragOver={handleDragOver} onDrop={handleDrop}>
    {children}
  </div>;
};

export default Droppable