/*
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately
to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

Example 1:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
Example 2:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

Only given test cases are used for the sake of time
 */
class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const rearrage = (head) => {
    reverse(midPoint(head))
}

const midPoint = (head) => {
    let slow = head,
    fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const reverse = (head) => {
    let prev = null,
    curr = head,
    next = curr.next;
  
    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = curr.next;
    }

    return prev;
}