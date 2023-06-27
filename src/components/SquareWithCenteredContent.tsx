import React, { ReactNode } from 'react';
import Line from './Line';

interface SquareWithCenteredContentProps {
  children?: ReactNode;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  className?: string;
}

const SquareWithCenteredContent: React.FC<SquareWithCenteredContentProps> = ({
  children,
  top = false,
  right = false,
  bottom = false,
  left = false,
  className = '',
}) => {
  return (
    <div className={`w-32 h-32 flex items-center justify-center relative ${className}`}>
      {top && <Line direction="top"/>}
      {right && <Line direction="right"/>}
      {bottom && <Line direction="bottom"/>}
      {left && <Line direction="left"/>}
      <div className="z-10">{children}</div>
    </div>
  );
};

export default SquareWithCenteredContent;
