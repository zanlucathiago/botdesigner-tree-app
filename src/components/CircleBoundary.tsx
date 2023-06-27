import CircleButton from './Circle';

interface CircleBoundaryProps {
  buttonText: string;
}

const CircleBoundary: React.FC<CircleBoundaryProps> = ({ buttonText }) => {
  return (
    <CircleButton
      backgroundColor="bg-blue-900"
      hoverBackgroundColor="bg-blue-700"
    >
      <span className="text-lg text-white">{buttonText}</span>
    </CircleButton>
  );
};

export default CircleBoundary;
