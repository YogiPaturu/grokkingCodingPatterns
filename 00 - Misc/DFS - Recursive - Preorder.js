/*
const dfsRecursePreOrder = (node, arr = []) => {
    if(!node) return arr;

    arr.push(node.val);
    if(node.left) dfsRecursePreOrder(node.left);
    if(node.right) dfsRecursePreOrder(node.right);
}
*/

const dfsRecursePreOrder = (node, arr = []) => {
    if(node) {
        arr.push(node.val);
        if(node.left) dfsRecursePreOrder(node.left, arr);
        if(node.right) dfsRecursePreOrder(node.right, arr);
    }
    return arr;
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
bst.left.right = new Node(19);
bst.right = new Node(35);
bst.right.left = new Node(31);
bst.right.right = new Node(42);

const dfsArr = dfsRecursePreOrder(bst);
const expectedArr = [27, 14, 10, 19, 35, 31, 42];
console.log(dfsArr);
console.log(expectedArr);
console.assert(JSON.stringify(dfsArr) === JSON.stringify(expectedArr), 'Aint it cheif');