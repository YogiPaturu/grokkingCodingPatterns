// 2 stacks
// const dfsIterativePostorder = (root) => {
//     if (root == null) return;
    
//     const s1 = [root],
//     s2 = [],
//     traversed = [];
//     let curr;

//     while (s1.length > 0) {
//         curr = s1.pop();
//         if (curr.left) s1.push(curr.left);
//         if (curr.right) s1.push(curr.right);
//         s2.push(curr);
//     }

//     while (s2.length) {
//         curr = s2.pop();
//         traversed.push(curr.val);
//     }

//     return traversed;
// }

// 2 stack
const dfsIterativePostorder = (root) => {  
    const s1 = [root],
    s2 = [];
    let curr;

    while (s1.length) {
        curr = s1.pop();
        if (curr.left) s1.push(curr.left);
        if (curr.right) s1.push(curr.right);
        s2.push(curr.val);
    }

    return s2.reverse();
}

// 1 stack
// const dfsIterativePostorder = (root) => {
//     if (!root) return []
    
//     const stack = [root],
//     traversed = [];

//     let prev = null,
//     current;
//     while (stack.length){
//         current = stack[stack.length-1];
//         if (!prev || prev.left == current ||prev.right == current){
//             if (current.left) stack.push(current.left);
//             else if (current.right) stack.push(current.right);
//             else {
//                 stack.pop();
//                 traversed.push(current.val);
//             }
//         }
//         else if (current.left == prev){
//             if (current.right) stack.push(current.right);
//             else {
//                 stack.pop();
//                 traversed.push(current.val);
//             }
//         }
//         else if (current.right == prev){
//             stack.pop();
//             traversed.push(current.val);
//         }
//         prev = current;
//     }
//     return traversed;
// }
    
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