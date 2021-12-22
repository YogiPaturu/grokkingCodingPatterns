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

// const midPoint = (head) => {
//     let slow = head,
//     fast = head;

//     while(fast !== null && fast.next !== null){
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow;
// }

// const reverse = (head) => {
//     let prev = null;
//     next = head.next;
  
//     while(curr !== null){
//         next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }

//     return prev;
// }

// const rearrange = (head) => {
//     if(head === null || head.next === null) return ;

//     currSecondHalf = reverse(midPoint(head))
//     currFirstHalf = head;

//     while(currFirstHalf !== null && currSecondHalf !== null){
//         temp = currFirstHalf.next;
//         currFirstHalf.next = currSecondHalf;
//         currFirstHalf = temp;

//         temp = currSecondHalf.next;
//         currSecondHalf.next = currFirstHalf;
//         currSecondHalf = temp;
//     }

//     if(currFirstHalf !== null) currFirstHalf.next = null;

// }

function reorder(head) {
    if (head === null || head.next === null) {
      return;
    }
  
    // find middle of the LinkedList
    let slow = head,
      fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // slow is now pointing to the middle node
    headSecondHalf = reverse(slow); // reverse the second half
    headFirstHalf = head;
  
    // rearrange to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
      temp = headFirstHalf.next;
      headFirstHalf.next = headSecondHalf;
      headFirstHalf = temp;
  
      temp = headSecondHalf.next;
      headSecondHalf.next = headFirstHalf;
      headSecondHalf = temp;
    }
    // set the next of the last node to 'null'
    if (headFirstHalf !== null) {
      headFirstHalf.next = null;
    }
  }
  
  
  function reverse(head) {
    let prev = null;
    while (head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
reorder(head)
head

