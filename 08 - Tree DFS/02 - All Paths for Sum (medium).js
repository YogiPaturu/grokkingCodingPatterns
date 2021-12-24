/*
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.


*/

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const findPaths = (root, sum) => {
    const allPaths = [];
    findPathRecursive(root, sum, [], allPaths);
    return allPaths;
}

const findPathRecursive = (currNode, sum, currPath, allPaths) => {
    if(currNode === null) return;

    currPath.push(currNode.val);
    
    if(currNode.val === sum && currNode.left === null && currNode.right === null) allPaths.push([...currPath]);
    else {
        findPathRecursive(currNode.left, sum - currNode.val, currPath, allPaths);
        findPathRecursive(currNode.right, sum - currNode.val, currPath, allPaths);
    }

    currPath.pop();
    return;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(findPaths(root, 23))
