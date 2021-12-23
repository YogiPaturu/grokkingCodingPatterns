/*
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order,
i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
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

const traverse = (root) => {
    const result = new Deque();
    if(root === null) return result;
    const queue = new Deque();
    let levelSize = 0,
    currentLevel = [],
    currentNode = root;

    queue.push(root);

    while(queue.length){
        levelSize = queue.length;
        currentLevel = [];

        for(i = 0; i < levelSize; i++){
            currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
        }

        result.unshift(currentLevel)
    }

    return result;
}


const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);
console.log(traverse(root).toArray())