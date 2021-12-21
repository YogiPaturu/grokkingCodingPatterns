/*
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.

Example 1:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3

Example 2:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4

Example 3:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4

make fast go twice the rate of slow
when fast hits the end, slow will be at half the distance

Time - O(1/2 N) ≈ O(N)
Space - O(1)

*/

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = null;
    }
}

const middleNode = (head) => {
    let fast = head,
    slow = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


const head = new Node(1);
console.log(middleNode(head)); // 1
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
console.log(middleNode(head)); // 3
head.next.next.next.next = new Node(5);
console.log(middleNode(head)); // 3

