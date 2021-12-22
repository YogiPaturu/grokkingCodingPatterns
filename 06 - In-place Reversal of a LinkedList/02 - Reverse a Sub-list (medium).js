/*
Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

increment curr to p
while curr <= p
    reverse LL to q


 */
class Node{
    constructor(value, next = null){
            this.value = value;
            this.next = next;
    }
}

const reverseSubList = (head, p, q) => {
    let curr = head,
    prev = curr,
    next = curr.next;
    count = 0;

    while(curr !== null && count < p - 1){
        prev = curr;
        curr = curr.next;
        count++;
    }

    const lastNodeFirstPart = prev;
    const lastNodeSubList = curr;

    // curr is at p
    // prev is 1 before curr
    while(curr !== null && count < q){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    if(lastNodeFirstPart !== null) lastNodeFirstPart.next = prev;
    else head = prev;

    lastNodeSubList.next = curr;
    return head;

}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log((reverseSubList(head, 2, 4)))
