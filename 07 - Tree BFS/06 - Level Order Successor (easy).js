/*
Given a binary tree and a node, find the level order successor of the given node in the tree.
The level order successor is the node that appears right after the given node in the level order traversal.

BFS
When given node is found, set flag
If flag is true, return node
*/
// npm install --save collections
const Deque = require("collections/deque");

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const levelOrderSuccessor = (root, targetVal) => {
    if(root === null || targetVal === null) return;

    let found = false,
    levelLen,
    currNode;

    const queue = new Deque();
    queue.push(root);
    while(queue.length > 0){
        levelLen = queue.length;
        for(let i = 0; i < levelLen; i++){
            currNode = queue.shift();

            if(found === true) return currNode.val;
            if(currNode.val === targetVal) found = true;

            if(currNode.left !== null) queue.push(currNode.left);
            if(currNode.right !== null) queue.push(currNode.right);
        }
    }
    return null;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(levelOrderSuccessor(root, 12)); // 7