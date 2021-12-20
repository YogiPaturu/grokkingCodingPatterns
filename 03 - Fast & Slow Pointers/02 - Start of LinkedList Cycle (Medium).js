/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

fast/slow pointers
find the length of the cycle
start a pointer length of the cycle ahead of the other pointer from the start
increment until they intersect, which will be the beginning of the cycle

Time - O(N + N) ≈ O(N) such that N is the length of LL 
Space - O(1)
*/

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = null;
    }
}

const startCycle = (head) => {
    let len = ifCycleReturnItsLen(head);
    if(!len) return false;
    let p1 = head,
    p2 = head;
   
    while(len){
        p1 = p1.next;
        len--;
    }

    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
        if(p1 === p2) return p1;
    }
    
    return head;
}

const cycleLen = (start) => {
    let count = 0,
    curr = start;

    while(true){
        curr = curr.next;
        count++;
        if(curr === start) break
    }

    return count;
}

const ifCycleReturnItsLen = (head) =>{
    let slow = head, fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return cycleLen(slow);
    }
    return false;
}



const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head;
console.log(startCycle(head)); // head (1)


head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next;
console.log(startCycle(head)); // head.next (2)

head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next.next.next.next;
console.log(startCycle(head)); // head.head.next.next.next.next (5)

head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(startCycle(head)); // head.head.next.next.next.next (5)