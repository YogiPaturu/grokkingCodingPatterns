// 2 stacks
const dfsIterativePostorder = (root) => {
    if (root == null) return;
    
    const s1 = [root],
    s2 = [],
    traversed = [];
    let curr;

    while (s1.length > 0) {
        curr = s1.pop();
        if (curr.left) s1.push(curr.left);
        if (curr.right) s1.push(curr.right);
        s2.push(curr);
    }

    while (s2.length) {
        curr = s2.pop();
        traversed.push(curr.val);
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