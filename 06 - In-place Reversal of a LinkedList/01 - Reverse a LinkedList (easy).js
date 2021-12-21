/*
Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

Time - O(N)
Space - O(1)
*/

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = null;
    }
}

const reverse = (head) => {
    let prev = null,
    curr = head,
    next = curr.next;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}


let head = new Node(1);
console.log(reverse(head)); // 1

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
console.log(reverse(head)); // 4 -> 3 -> 2 -> 1

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(reverse(head)); // 5 -> 4 -> 3 -> 2 -> 1
