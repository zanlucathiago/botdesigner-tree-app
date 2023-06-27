import React from 'react';
import svgImage from '../assets/dropdown-svgrepo-com.svg';

const CircleWithArrow: React.FC = () => {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
      <img src={svgImage} alt="SVG Image" className="w-6 h-6 text-white fill-current" />
    </div>
  );
};

export default CircleWithArrow;
