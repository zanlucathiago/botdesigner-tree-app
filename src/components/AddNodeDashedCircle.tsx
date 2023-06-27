import React from 'react';
import SquareWithCenteredContent from './SquareWithCenteredContent';
import Droppable from './Droppable';

interface AddNodeDashedCircleProps {
  onClick?: () => void;
  onDrop: () => void;
  bottom?: boolean;
}

const AddNodeDashedCircle: React.FC<AddNodeDashedCircleProps> = ({ onClick, bottom, onDrop }) => {
  const circleStyle = {
    stroke: 'gray',
    strokeWidth: 1,
    strokeDasharray: '2 2',
    fill: 'white',
    opacity: 1,
    cursor: 'pointer',
  };

  const plusStyle = {
    stroke: 'black',
    strokeWidth: 2,
    cursor: 'pointer',
  };

  return (
    <div className="flex">
      <SquareWithCenteredContent bottom={bottom} top right />
      <Droppable onDrop={onDrop}>
        <SquareWithCenteredContent left>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-20 -20 40 40"
            width={32}
            height={32}
            onClick={onClick}
          >
            <circle cx="0" cy="0" r="18" style={circleStyle} />
            <line x1="-8" y1="0" x2="8" y2="0" style={plusStyle} />
            <line x1="0" y1="-8" x2="0" y2="8" style={plusStyle} />
          </svg>
        </SquareWithCenteredContent>
      </Droppable>
    </div>
  );
};

export default AddNodeDashedCircle;
