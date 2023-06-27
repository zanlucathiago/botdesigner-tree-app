import Circle from './Circle';
import svgImage from '../assets/send-svgrepo-com.svg';

const TreeNode = () => {
  return (
    <Circle
      backgroundColor="bg-blue-500"
      hoverBackgroundColor="bg-blue-400"
    >
      <img src={svgImage} alt="SVG Image" className="w-6 h-6 text-white fill-current" />
    </Circle>
  );
};

export default TreeNode;
