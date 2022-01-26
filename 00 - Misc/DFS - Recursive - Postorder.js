const dfsRecursePostOrder = (node, arr = []) => {
    if(!node) return arr;

    if(node.left) dfsRecursePostOrder(node.left, arr);
    if(node.right) dfsRecursePostOrder(node.right, arr);
    arr.push(node.val);
}