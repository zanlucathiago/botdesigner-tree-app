import React from 'react';

type CircleButtonProps = {
  backgroundColor: string;
  hoverBackgroundColor: string;
  children: React.ReactNode;
};

const CircleButton = ({
  backgroundColor,
  hoverBackgroundColor,
  children
}: CircleButtonProps) => {
  return (
    <div className={`flex items-center justify-center w-16 h-16 rounded-full ${backgroundColor} hover:${hoverBackgroundColor} cursor-pointer`}>
      {children}
    </div>
  );
};

export default CircleButton;
