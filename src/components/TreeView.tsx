import React, { useState } from 'react';
import AddNodeDashedCircle from './AddNodeDashedCircle';
import ElseCircle from './ElseCircle';
import StartCircle from './StartCircle';
import ChildNodes from './ChildNodes';

interface TreeNode {
  id: number;
  name: string;
  idCounter: number;
  children: TreeNode[];
}

const TreeView: React.FC = () => {
  const [draggedNodeName, setDraggedNodeName] = useState<string | null>(null);
  const [rootNode, setRootNode] = useState<TreeNode>({
    id: 1,
    name: '',
    idCounter: 0,
    children: [],
  });

  const handleDrop = (name: string) => {
    if (draggedNodeName !== null) {
      const updatedRootNode = { ...rootNode };
      const dragNode = findNodeById(updatedRootNode, draggedNodeName);
      const targetNode = findNodeById(updatedRootNode, name);

      if (dragNode && targetNode) {
        const parent = findParentNode(updatedRootNode, draggedNodeName);
        if (parent) {
          parent.children = parent.children.filter(child => child.name !== draggedNodeName);
        }

        targetNode.children.push(dragNode);

        setRootNode(updatedRootNode);
      }

      setDraggedNodeName(null);
    }
  };

  const findNodeById = (node: TreeNode, id: string): TreeNode | undefined => {
    if (node.name === id) {
      return node;
    }

    for (const child of node.children) {
      const foundNode = findNodeById(child, id);
      if (foundNode) {
        return foundNode;
      }
    }

    return undefined;
  };

  const findParentNode = (node: TreeNode, targetId: string): TreeNode | null => {
    for (const child of node.children) {
      if (child.name === targetId) {
        return node;
      }

      const parent = findParentNode(child, targetId);
      if (parent !== null) {
        return parent;
      }
    }

    return null;
  };

  const addChildNode = (parentNode: TreeNode) => {
    const newId = parentNode.idCounter + 1;
    const nodeId = parentNode.name ? `${parentNode.name}.${newId}` : `${newId}`;
    const newNode: TreeNode = {
      id: newId,
      name: nodeId,
      idCounter: 0,
      children: [],
    };
    parentNode.idCounter++;
    parentNode.children.push(newNode);
    setRootNode({ ...rootNode });
  };

  return (
    <div className="flex flex-col">
      <StartCircle />
      {rootNode.children.map(childNode =>
        <ChildNodes key={childNode.id} node={childNode} addChildNode={addChildNode} onDrop={handleDrop} onDragStart={setDraggedNodeName} />
      )}
      <AddNodeDashedCircle bottom onClick={() => addChildNode(rootNode)} onDrop={() => handleDrop(rootNode.name)} />
      <ElseCircle />
    </div>
  );
};

export default TreeView;
