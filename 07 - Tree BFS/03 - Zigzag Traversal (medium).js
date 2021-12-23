/*
Given a binary tree, populate an array to represent its zigzag level order traversal.
You should populate the values of all nodes of the first level from left to right,
then right to left for the next level and keep alternating in the same manner for the following levels.
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
    const result = [];
    if(root === null) return result;

    let currNode,
    currLevel,
    levelLen,
    leftToRight = 1;
    const queue = new Deque();

    queue.push(root);

    while(queue.length > 0){
        currLevel = new Deque();
        levelLen = queue.length
        for(let i = 0; i < levelLen; i++){
            currNode = queue.shift();

            if(leftToRight === 1) currLevel.push(currNode.val);
            else currLevel.unshift(currNode.val);
            
            if(currNode.left !== null) queue.push(currNode.left);
            if(currNode.right !== null) queue.push(currNode.right);
        }
        result.push(currLevel.toArray());
        leftToRight *= -1;
    }

    return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(traverse(root))
