/*
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N)
time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false

Initialize isPalindrome to true
Find the midpoint of the linked list using fast and slow pointers
Store midpoint (as reference for later, and to unreverse this is the starting point)
Reverse from the middle to the end
Walk one pointer from the new head and another pointer from the original head
    If the nodes that both point to aren't equal, set isPalindrome to false
Unreverse the reversed portion of the linkedlist
Return isPalindrome

Time - O(N + N + N) = O(3N) ≈ O(N)
Space - O(1);
*/

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const midLinkedlist = (head) => {
    let slow = head,
    fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const reverseLinkedList = (head) => {
    let prev = null,
    next = head.next;

    while(head !== null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}

const linkedlistIsPalindrome = (head) => {
    if(head === null || head.next === null) return true;

    reversedHead = reverseLinkedList(midLinkedlist(head));
    reversedHead;
    const copyReversedHead = reversedHead;

    while(head !== null && reversedHead !== null){
        if(head.value !== reversedHead.value) break;
        head = head.next;
        reversedHead = reversedHead.next;
    }

    head = reverseLinkedList(copyReversedHead)

    if(head === null || reversedHead === null) return true
    return false;
}

// odd - false
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(linkedlistIsPalindrome(head)); // false
console.log(head); // 1 -> 2 -> 3 -> 4 -> 5

// even - false
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(linkedlistIsPalindrome(head)); // false
console.log(head); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

// odd - true
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(1);
console.log(linkedlistIsPalindrome(head)); // true
console.log(head); // 1 -> 2 -> 3 -> 2 -> 1

// even - true
head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(3);
head.next.next.next = new Node(1);
console.log(linkedlistIsPalindrome(head)); // true
console.log(head); // 1 -> 2 -> 3 -> 3 -> 2 -> 1
