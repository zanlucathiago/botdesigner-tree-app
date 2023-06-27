import React from 'react';
import AddNodeDashedCircle from './AddNodeDashedCircle';
import SquareWithCenteredContent from './SquareWithCenteredContent';
import CircleWithArrow from './CircleWithArrow';
import TreeNode from './TreeNode';
import Tooltip from './Tooltip';

interface TreeNode {
  id: number;
  children: TreeNode[];
}

interface ChildNodesProps {
  node: TreeNode;
  addChildNode: (parentNode: TreeNode) => void;
  idHierarchy: string;
}

const ChildNodes: React.FC<ChildNodesProps> = ({ node, addChildNode, idHierarchy }) => {
  const nodeId = idHierarchy ? `${idHierarchy}.${node.id}` : `${node.id}`;

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
          <Tooltip text={`node ${nodeId}`} />
          <TreeNode />
        </SquareWithCenteredContent>
        {node.children.map(childNode => (
          <React.Fragment key={childNode.id}>
            <ChildNodes node={childNode} addChildNode={addChildNode} idHierarchy={nodeId} />
          </React.Fragment>
        ))}
        <AddNodeDashedCircle onClick={() => addChildNode(node)} />
      </div>
    </div>
  );
};

export default ChildNodes;
