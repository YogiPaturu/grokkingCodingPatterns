const dfsRecursePreOrder = (node, arr = []) => {
    if(!node) return arr;

    arr.push(node.val);
    if(node.left) dfsRecurseInOrder(node.left);
    if(node.right) dfsRecurseInOrder(node.right);
}