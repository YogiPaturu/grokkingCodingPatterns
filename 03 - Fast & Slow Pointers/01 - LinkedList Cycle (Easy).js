/*
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

Fast/slow pointers

increment the fast by 2 and slow by 1
if they meet, there's a cycle

Time - O(N)/Linear
Space - O(1)
 */

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const hasCycle = (head) => {
    let slow = head,
    fast = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true;
    }

    return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log((hasCycle(head))); // false

head.next.next.next.next.next.next = head.next.next
console.log((hasCycle(head))); // true

head.next.next.next.next.next.next = head.next.next.next
console.log((hasCycle(head))); // true



