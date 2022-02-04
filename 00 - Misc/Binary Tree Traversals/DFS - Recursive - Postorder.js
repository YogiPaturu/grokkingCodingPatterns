/*
const dfsRecursePostOrder = (node, arr = []) => {
    if(!node) return arr;

    if(node.left) dfsRecursePostOrder(node.left, arr);
    if(node.right) dfsRecursePostOrder(node.right, arr);
    arr.push(node.val);

    return arr;
}
*/

const dfsRecursePostOrder = (node, arr = []) => {
    if(node) {

        if(node.left) dfsRecursePostOrder(node.left, arr);
        if(node.right) dfsRecursePostOrder(node.right, arr);
        arr.push(node.val);
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

const dfsArr = dfsRecursePostOrder(bst);
const expectedArr = [10, 19, 14, 31, 42, 35, 27];
console.log(dfsArr);
console.log(expectedArr);
console.assert(JSON.stringify(dfsArr) === JSON.stringify(expectedArr), 'Aint it cheif');