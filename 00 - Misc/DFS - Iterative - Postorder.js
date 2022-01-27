const dfsIterativePostorder = (root) => {
    const stack = [],
    traversed = [];
    let curr = root;

    while(stack.length || curr){
        while(curr) {
            traversed.push(curr.val)
            stack.push(curr);
            curr = curr.right;        
        }
        curr = stack.pop()
        curr = curr.left;
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

const traversedBST = dfsIterativePostorder(bst);
const expectedArr = [10, 19, 14, 31, 42, 35, 27];
traversedBST
expectedArr
console.assert((JSON.stringify(traversedBST) === JSON.stringify(expectedArr)), 'Aint it cheif');