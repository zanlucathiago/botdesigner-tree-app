import React from 'react';

interface LineProps {
  direction: string;
}

const Line: React.FC<LineProps> = ({ direction }) => {
  const getPositionStyles = (direction: string) => {
    switch (direction) {
      case 'top':
        return 'h-1/2 bg-blue-300 w-px absolute top-0';
      case 'right':
        return 'w-1/2 bg-blue-300 h-px absolute right-0';
      case 'bottom':
        return 'h-1/2 bg-blue-300 w-px absolute bottom-0';
      case 'left':
        return 'w-1/2 bg-blue-300 h-px absolute left-0';
      default:
        return '';
    }
  };

  return (
    <div className={`absolute inset-0 flex items-center justify-center z-0`}>
      <div className={getPositionStyles(direction)}></div>
    </div>
  );
};

export default Line;
