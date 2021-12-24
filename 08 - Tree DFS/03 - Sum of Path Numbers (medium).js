/*
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
*/

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const sumPaths = (currNode, pathSum) => {
    if(currNode === null) return 0;

    pathSum = pathSum * 10 + currNode.val;
    
    if(currNode.left === null && currNode.right === null) return pathSum;

    return sumPaths(currNode.left, pathSum) + sumPaths(currNode.right, pathSum)
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(sumPaths(root, 0));