/*
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
*/

class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const pathGivenSequence = (currNode, arr, i = 0) => {
    if(arr.length === 0) return true;

    if(currNode.val === arr[i]) {
        i++;
        if(i === arr.length - 1) return true;
        if(currNode.left !== null && currNode.left.val === arr[i]) return pathGivenSequence(currNode.left, arr, i);
        if(currNode.right !== null && currNode.right.val === arr[i]) return pathGivenSequence(currNode.right, arr, i);
    }

    return false;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3)
console.log(pathGivenSequence(root, [1,2,3])); // true
root.left.left = new TreeNode(4)
console.log(pathGivenSequence(root, [1,2,4])); // true