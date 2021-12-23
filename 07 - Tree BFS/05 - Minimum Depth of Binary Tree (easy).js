/*
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

BFS until you reach a level with no leaves and return depth counter
initialize depth, queue, currNode, levelLen
push root to queue
while queue has a length
    increment depth
    set levelLen to length of queue
    for levelLen
        set currNode to queue.shift()
        if left and right are null, return depth
        if left not null, push left to queue
        if right not null, push right to queue

Time - O(N) such that N is the number of nodes
Space - O(N/2) ≈ O(N) such that N is the number of nodes
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

const minDepth = (root) => {
    let depth = 0;
    if(root === null) return depth;

    let currNode,
    levelLen;

    const queue = new Deque();
    queue.push(root);

    while(queue.length > 0){
        depth++;
        levelLen = queue.length;
        for(let i = 0; i < levelLen; i++){
            currNode = queue.shift();
            if(currNode.left === null && currNode.right === null) return depth;
            if(currNode.left !== null) queue.push(currNode.left);
            if(currNode.right !== null) queue.push(currNode.right);
        }
    }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(minDepth(root));
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(minDepth(root));

