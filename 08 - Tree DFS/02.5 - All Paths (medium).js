/*
Given a binary tree, return all root-to-leaf paths.
*/

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const findPaths = (root) =>{
    const allPaths = [];
    findPathRecursive(root, [], allPaths);
    return allPaths;
}

const findPathRecursive = (currNode, currPath, allPaths) =>{
    if(currNode === null) return;
    
    currPath.push(currNode.val);

    if(currNode.left === null && currNode.right === null) allPaths.push([...currPath])
    
    findPathRecursive(currNode.left, currPath, allPaths);
    findPathRecursive(currNode.right, currPath, allPaths);
    
    currPath.pop();
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(findPaths(root));