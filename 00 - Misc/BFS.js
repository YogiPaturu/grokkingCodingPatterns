const Queue = require('collections/deque')

const bfs = (root) => {
    const queue = new Queue,
    result = [];
    let levelLen,
    curr;

    queue.push(root);

    while(queue.length){
        levelLen = queue.length;
        while(levelLen){
            curr = queue.shift();
            result.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
            levelLen--;
        }
    }
    
    return result;
}

class Node{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bst = new Node(27);
bst.left = new Node(14);
bst.left.left = new Node(10);
bst.left.right = new Node(19)
bst.right = new Node(35);
bst.right.left = new Node(31);
bst.right.right = new Node(42);

console.log(bfs(bst));