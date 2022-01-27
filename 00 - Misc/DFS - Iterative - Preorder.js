// const stack = [],
// traversed = [];
// let curr = root;

// while(stack.length || curr){
//     while(curr) {
//         traversed.push(curr.val)
//         stack.push(curr);
//         curr = curr.left;
//     }
//     curr = stack.pop()
//     curr = curr.right;        
// }

// return traversed;
const dfsIterativePreorder = (root) => {
    const stack = [root],
    traversed = [];
    let curr;

    while(stack.length){
        curr = stack.pop();
        traversed.push(curr.val)
        if(curr.right) stack.push(curr.right);
        if(curr.left) stack.push(curr.left);
    }

    return traversed;
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
bst

const traversedBST = dfsIterativePreorder(bst);
const expectedArr = [27, 14, 10, 19, 35, 31, 42];
traversedBST
expectedArr
console.assert((JSON.stringify(traversedBST) === JSON.stringify(expectedArr)), 'Aint it cheif');