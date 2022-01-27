const dfsIterateInOrder = (root) => {
    const stack = [],
    traversed = [];
    let curr = root;

    while(stack.length || curr){
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop()
        traversed.push(curr.val)
        curr = curr.right;        
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

const traversedBST = dfsIterateInOrder(bst);
const expectedArr = [10,14,19,27,31,35,42];
traversedBST
expectedArr
console.assert((JSON.stringify(traversedBST) === JSON.stringify(expectedArr)), 'Aint it cheif');