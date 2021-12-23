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
    result = [];
    if(root.value === null) return result;

    const queue = new Deque();
    let levelSize = 0,
    currentLevel = [],
    currentNode = root;

    queue.push(root);

    while(queue.length > 0){
        levelSize = queue.length;
        currentLevel = [];
        for(let i = 0; i < levelSize; i++){
            currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
        }
        result.push(currentLevel);
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
console.log(traverse(root))