/*
Similar Problems
Given the head of a LinkedList with a cycle, find the length of the cycle.

slow/fast pointers
determing if there is a cycle
at the intersection point, let the slow pointer continue until it hits that same point again and count
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
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return cycleLen(slow)
    }
    return 0;
}

const cycleLen = (start) => {
    let count = 0;
    let curr = start;

    while(true){
        curr = curr.next
        count++;
        if(curr === start) break;
    }
    
    return count;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node (4);
head.next.next.next.next = head.next;
console.log(hasCycle(head)); // 3