import CircleBoundary from './CircleBoundary';
import SquareWithCenteredContent from './SquareWithCenteredContent';

const StartCircle = () => {
  return (
    <div>
      <SquareWithCenteredContent bottom>
        <CircleBoundary buttonText="START" />
      </SquareWithCenteredContent>
    </div>
  );
};

export default StartCircle;
