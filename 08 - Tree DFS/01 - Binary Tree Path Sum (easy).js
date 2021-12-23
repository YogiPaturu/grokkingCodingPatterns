/*
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

Time - O(N) such that N is the number of nodes
Space - O(N) such that N is the number of nodes
*/

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const hasSum = (root, sum) => {
    if(root === null) return false;
    if(root.val === sum && root.left === null && root.right === null) return true;
    return hasSum(root.left, sum - root.val) || hasSum(root.right, sum - root.val)
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.left.right = new TreeNode(5);
console.log(hasSum(root, 23));
console.log(hasSum(root, 16));