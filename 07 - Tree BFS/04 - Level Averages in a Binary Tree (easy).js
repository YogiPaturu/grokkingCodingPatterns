/*
Given a binary tree, populate an array to represent the averages of all of its levels.

Initialize currNode, queue, average, levelLen, sum
Push root to queue
While queue has a length
    set sum to 0
    set levelLen to the current length of queue
    for the length of queue
        set currNode to queue.shift
        sum += currNode.value
        if left, queue.push(left)
        if right, queue.push(right)
    average = sum/levelLen
    result.push(average)
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
const levelAverages = (root) => {
    const results = [];
    if(root === null) return results;

    let currNode,
    average,
    levelLen,
    sum;

    const queue = new Deque();
    queue.push(root);

    while(queue.length > 0){
        sum = 0;
        levelLen = queue.length;

        for(let i = 0; i < levelLen;i++){
            currNode = queue.shift();
            sum += currNode.val;
            if(currNode.left !== null) queue.push(currNode.left);
            if(currNode.right !== null) queue.push(currNode.right);
        }

        average = sum/levelLen;
        results.push(average);
    }

    return results;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(levelAverages(root))