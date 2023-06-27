import React from 'react';
import AddNodeDashedCircle from './AddNodeDashedCircle';
import SquareWithCenteredContent from './SquareWithCenteredContent';
import CircleWithArrow from './CircleWithArrow';
import TreeNode from './TreeNode';
import Tooltip from './Tooltip';
import Draggable from './Draggable';

interface TreeNode {
  id: number;
  name: string;
  idCounter: number;
  children: TreeNode[];
}

interface ChildNodesProps {
  node: TreeNode;
  addChildNode: (parentNode: TreeNode) => void;
  onDrop: (name: string) => void;
  onDragStart: (name: string) => void;
}

const ChildNodes: React.FC<ChildNodesProps> = ({ node, addChildNode, onDrop, onDragStart }) => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <SquareWithCenteredContent bottom top right>
          <CircleWithArrow />
        </SquareWithCenteredContent>
        <SquareWithCenteredContent top bottom className='flex-auto' />
      </div>
      <div className="flex flex-col">
        <SquareWithCenteredContent left bottom>
          <Tooltip text={`node ${node.name}`} />
          <Draggable name={node.name} onDragStart={onDragStart} >
            <TreeNode />
          </Draggable>
        </SquareWithCenteredContent>
        {node.children.map(childNode => (
          <React.Fragment key={childNode.id}>
            <ChildNodes node={childNode} addChildNode={addChildNode} onDragStart={onDragStart} onDrop={onDrop} />
          </React.Fragment>
        ))}
        <AddNodeDashedCircle onClick={() => addChildNode(node)} onDrop={() => onDrop(node.name)} />
      </div>
    </div>
  );
};

export default ChildNodes;
