import CircleBoundary from './CircleBoundary';
import SquareWithCenteredContent from './SquareWithCenteredContent';

const ElseCircle = () => {
  return (
    <div className="flex">
      <SquareWithCenteredContent right top />
      <SquareWithCenteredContent left>
        <CircleBoundary buttonText="ELSE" />
      </SquareWithCenteredContent>
    </div>
  );
};

export default ElseCircle;
