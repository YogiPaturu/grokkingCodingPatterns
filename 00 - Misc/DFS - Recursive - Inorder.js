const dfsRecurseInOrder = (node, arr = []) => {
    if(!node) return arr;
    if(node.left) dfsRecurseInOrder(node.left);
    arr.push(node.val);
    if(node.right) dfsRecurseInOrder(node.right);
}