/*
Given a binary tree, find its maximum depth (or height).
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

const maxDepth = (root) => {
    let depth = 0;
    if(root === null) return depth;

    let currNode,
    levelLen;

    const queue = new Deque();
    queue.push(root);

    while(queue.length > 0){
        depth++;
        levelLen = queue.length;

        for(i = 0; i < levelLen; i++){
            currNode = queue.shift();
            if(currNode.left !== null) queue.push(currNode.left);
            if(currNode.right !== null) queue.push(currNode.right);
        }
    }

    return depth;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(maxDepth(root));
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(maxDepth(root));

