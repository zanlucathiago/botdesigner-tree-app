import React from 'react';

interface LineConnectorProps {
  startPoint: {
    x: number;
    y: number;
  };
  endPoint: {
    x: number;
    y: number;
  };
}

const LineConnector: React.FC<LineConnectorProps> = ({
  startPoint,
  endPoint,
}) => {
  const path = `M${startPoint.x},${startPoint.y} L${endPoint.x},${startPoint.y} L${endPoint.x},${endPoint.y}`;

  return (
    <svg className="absolute" width="100%" height="100%">
      <path
        d={path}
        stroke="blue"
        strokeWidth="2"
        fill="none"
        className="text-blue-500"
      />
    </svg>
  );
};

export default LineConnector;
