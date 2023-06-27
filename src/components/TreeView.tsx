import React, { useState } from 'react';
import AddNodeDashedCircle from './AddNodeDashedCircle';
import ElseCircle from './ElseCircle';
import StartCircle from './StartCircle';
import ChildNodes from './ChildNodes';

interface TreeNode {
  id: number;
  children: TreeNode[];
}

const TreeView: React.FC = () => {
  const [rootNode, setRootNode] = useState<TreeNode>({
    id: 1,
    children: [],
  });

  const addChildNode = (parentNode: TreeNode) => {
    const newNode: TreeNode = {
      id: parentNode.children.length + 1,
      children: [],
    };
    parentNode.children.push(newNode);
    setRootNode({ ...rootNode }); // Trigger re-render
  };

  return (
    <div className="flex flex-col">
      <StartCircle />
      {rootNode.children.map(childNode =>
        <ChildNodes node={childNode} addChildNode={addChildNode} />
      )}
      <AddNodeDashedCircle bottom onClick={() => addChildNode(rootNode)} />
      <ElseCircle />
    </div>
  );
};

export default TreeView;
